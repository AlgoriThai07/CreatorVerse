import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../client";

function AddCreator() {
  const navigate = useNavigate();

  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setCreator((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { error } = await supabase.from("creators").insert({
      name: creator.name,
      url: creator.url,
      description: creator.description,
      imageURL: creator.imageURL,
    });

    if (error) {
      console.error("Error adding creator:", error);
      alert("Something went wrong while adding the creator.");
    } else {
      navigate("/");
    }
  }

  return (
    <div className="page form-page">
      <div className="form-hero">
        <p className="detail-label">Create New Profile</p>

        <h1>Add Creator</h1>

        <p>
          Add a creator you think deserves a spot in your Creatorverse. Include
          their name, channel link, description, and an optional image.
        </p>
      </div>

      <div className="form-layout">
        <form onSubmit={handleSubmit} className="creator-form">
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

          <button type="submit">Add to Creatorverse</button>
        </form>

        <div className="form-preview-card">
          <p className="detail-label">Preview</p>

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
              "Your creator description will appear here as you type."}
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

export default AddCreator;
