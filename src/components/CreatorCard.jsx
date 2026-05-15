import { Link } from "react-router-dom";

const CreatorCard = ({ creator }) => {
  return (
    <div className="creator-card">
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          className="creator-image"
        />
      )}
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noreferrer">
        Visit Channel
      </a>

      <div className="card-actions">
        <Link to={`/creator/${creator.id}`}>View Details</Link>
        <Link to={`/edit/${creator.id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default CreatorCard;
