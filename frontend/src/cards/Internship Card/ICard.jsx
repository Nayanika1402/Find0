import './Icard.css'

const ICard = ({role,companyName , imgUrl}) => {
  return (
    <div>
      <div className="card">
        <div className="card__img">
          <img
            src={imgUrl}
            alt="Internship"
          />
        </div>
        <div className="card__subtitle">{role}</div>
        <div className="card__wrapper">
          <div className="card__title">{companyName}</div>
          <div className="card__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              style={{
                userSelect: "none",
                width: "100%",
                height: "100%",
                display: "inline-block",
                fill: "rgb(224, 223, 220)",
                flexShrink: 0,
                cursor: "auto",
              }}
              color="rgb(224, 223, 220)"
            >
              <g color="rgb(224, 223, 220)">
                <circle cx="128" cy="128" r="96" opacity="0.2"></circle>
                <circle
                  cx="128"
                  cy="128"
                  r="96"
                  fill="none"
                  stroke="rgb(224, 223, 220)"
                  strokeMiterlimit="10"
                  strokeWidth="16"
                ></circle>
                <polyline
                  points="134.1 161.9 168 128 134.1 94.1"
                  fill="none"
                  stroke="rgb(224, 223, 220)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <line
                  x1="88"
                  y1="128"
                  x2="168"
                  y2="128"
                  fill="none"
                  stroke="rgb(224, 223, 220)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICard;
