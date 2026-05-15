import { useState, useEffect } from "react";
import CreatorCard from "../components/CreatorCard.jsx";
import { supabase } from "../client.js";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      // Implementation for fetching creators
      const { data, error } = await supabase.from("creators").select("*");
      if (error) {
        console.error("Error fetching creators:", error);
      } else {
        setCreators(data);
      }
    }
    fetchCreators();
  }, []);

  return (
    <div className="page">
      <h1>All Creators</h1>

      {creators.length === 0 ? (
        <p>No creators found. Please add some!</p>
      ) : (
        <div className="creator-list">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowCreators;
