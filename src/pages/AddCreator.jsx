import { useState } from "react";
import { supabase } from "../client.js";
import { useNavigate } from "react-router-dom";

const AddCreator = () => {
  const navigate = useNavigate();

  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCreator((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const { data, error } = await supabase.from("creators").insert({
      name: creator.name,
      url: creator.url,
      description: creator.description,
      imageURL: creator.imageURL,
    });

    if (error) {
      console.error("Error adding creator:", error);
      alert("Failed to add creator. Please try again.");
    } else {
      console.log("Creator added:", data);
      navigate("/");
    }
  }

  return (
    <div className="page">
      <h1>Add New Creator</h1>

      <form onSubmit={handleSubmit} className="creator-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={creator.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          URL:
          <input
            type="url"
            name="url"
            value={creator.url}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={creator.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="url"
            name="imageURL"
            value={creator.imageURL}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
};

export default AddCreator;
