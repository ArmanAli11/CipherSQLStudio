import { useNavigate } from "react-router-dom";

function AssignmentCard({ title, difficulty, description }) {
  const navigate = useNavigate();

  return (
    <div className="assignment-card">
      <div className="assignment-card__info">
        <h3 className="assignment-card__title">{title}</h3>
        <p className="assignment-card__description">
  {description}
</p>

        <span
          className={`assignment-card__difficulty assignment-card__difficulty--${difficulty.toLowerCase()}`}
        >
          {difficulty}
        </span>
      </div>

      <button
        className="assignment-card__button"
        onClick={() => navigate("/editor")}
      >
        Attempt
      </button>
    </div>
  );
}

export default AssignmentCard;
