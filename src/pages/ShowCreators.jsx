import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from("creators").select();

      if (error) {
        console.error("Error fetching creators:", error);
      } else {
        setCreators(data);
      }
    }

    fetchCreators();
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-label">Discover. Follow. Create.</p>

            <h1>Creatorverse</h1>

            <p className="hero-subtitle">
              A curated collection of content creators worth following.
            </p>

            <div className="hero-buttons">
              <a href="#creators" className="primary-button">
                View All Creators
              </a>

              <Link to="/new" className="secondary-button">
                Add Creator
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="creators" className="page creators-section">
        <div className="section-header">
          <p className="detail-label">Creator Gallery</p>
          <h2>All Creators</h2>
          <p>
            Browse your favorite creators, visit their pages, or update their
            information.
          </p>
        </div>

        {creators.length === 0 ? (
          <p>No creators yet. Add your first creator!</p>
        ) : (
          <div className="creator-list">
            {creators.map((creator) => (
              <CreatorCard key={creator.id} creator={creator} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default ShowCreators;
