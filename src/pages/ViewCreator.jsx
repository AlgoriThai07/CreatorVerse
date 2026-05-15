import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data);
      }
    }

    fetchCreator();
  }, [id]);

  if (!creator) {
    return (
      <div className="page">
        <p>Loading creator...</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="detail-layout">
        <div className="detail-image-wrapper">
          {creator.imageURL ? (
            <img
              src={creator.imageURL}
              alt={creator.name}
              className="detail-image"
            />
          ) : (
            <div className="detail-placeholder">
              <span>{creator.name.charAt(0)}</span>
            </div>
          )}
        </div>

        <div className="detail-content">
          <p className="detail-label">Featured Creator</p>

          <h1>{creator.name}</h1>

          <p className="detail-description">{creator.description}</p>

          <div className="detail-actions">
            <a
              href={creator.url}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Visit Creator Page
            </a>

            <Link to={`/edit/${creator.id}`} className="secondary-button">
              Edit Creator
            </Link>

            <Link to="/" className="secondary-button">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCreator;
