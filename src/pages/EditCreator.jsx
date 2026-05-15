import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching creator:", error);
        alert("Could not load this creator.");
      } else {
        setCreator({
          name: data.name || "",
          url: data.url || "",
          description: data.description || "",
          imageURL: data.imageURL || "",
        });
      }
    }

    fetchCreator();
  }, [id]);

  function handleChange(event) {
    const { name, value } = event.target;

    setCreator((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleUpdate(event) {
    event.preventDefault();

    const { error } = await supabase
      .from("creators")
      .update({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageURL: creator.imageURL,
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating creator:", error);
      alert("Something went wrong while updating the creator.");
    } else {
      navigate("/");
    }
  }

  async function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this creator?",
    );

    if (!confirmDelete) return;

    const { error } = await supabase.from("creators").delete().eq("id", id);

    if (error) {
      console.error("Error deleting creator:", error);
      alert("Something went wrong while deleting the creator.");
    } else {
      navigate("/");
    }
  }

  return (
    <div className="page form-page">
      <div className="form-hero">
        <p className="detail-label">Update Creator Profile</p>

        <h1>Edit Creator</h1>

        <p>
          Update this creator’s information, fix their link, improve the
          description, or change the image shown in your Creatorverse gallery.
        </p>
      </div>

      <div className="form-layout">
        <form onSubmit={handleUpdate} className="creator-form">
          <label>
            Creator Name
            <input
              type="text"
              name="name"
              value={creator.name}
              onChange={handleChange}
              placeholder="e.g. Fireship"
              required
            />
          </label>

          <label>
            Creator URL
            <input
              type="url"
              name="url"
              value={creator.url}
              onChange={handleChange}
              placeholder="https://youtube.com/@creator"
              required
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              value={creator.description}
              onChange={handleChange}
              placeholder="What kind of content do they make?"
              required
            />
          </label>

          <label>
            Image URL
            <input
              type="url"
              name="imageURL"
              value={creator.imageURL}
              onChange={handleChange}
              placeholder="Optional image link"
            />
          </label>

          <button type="submit">Save Changes</button>

          <button
            type="button"
            className="delete-button"
            onClick={handleDelete}
          >
            Delete Creator
          </button>
        </form>

        <div className="form-preview-card">
          <p className="detail-label">Live Preview</p>

          <div className="preview-image">
            {creator.imageURL ? (
              <img
                src={creator.imageURL}
                alt={creator.name || "Creator preview"}
              />
            ) : (
              <span>{creator.name ? creator.name.charAt(0) : "?"}</span>
            )}
          </div>

          <h2>{creator.name || "Creator Name"}</h2>

          <p>
            {creator.description ||
              "Your creator description will appear here as you edit."}
          </p>

          {creator.url ? (
            <a href={creator.url} target="_blank" rel="noreferrer">
              Visit Creator Page
            </a>
          ) : (
            <span className="muted-link">Creator link preview</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditCreator;
