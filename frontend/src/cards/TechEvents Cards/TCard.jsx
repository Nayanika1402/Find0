import "./Tcard.css";

const TCard = () => {
  return (
    <div>
      <div className="seminar-box">
        <img
          src="https://image.khaleejtimes.com/?uuid=d0bae7cf-e8b4-54a9-ac85-b47cb3351344&function=fit&type=preview&source=false&q=75&maxsize=1200&scaleup=0"
          alt="img"
        />
        <div className="seminar-info">
          <h2>Meta Dcrypt</h2>
          <p>Web 3.0 Confarence</p>
          <button className="btn">Get Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default TCard;
