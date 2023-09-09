
import TCard from '../../cards/TechEvents Cards/TCard'

const Events = () => {
  return (
    <div className="upperSectionHeadings">
      <div className="techEvents">
        <h3>
          Tech <span>Events </span>
        </h3>
        <div className="events">
          {/* {idata.map((item, index) => {
              return (
                <ICard
                  key={index}
                  role={item.role}
                  companyName={item.companyName}
                  imgUrl={item.imgUrl}
                />
              );
            })} */}
          <TCard />
          <TCard />
          <TCard />
          <TCard />
          <TCard />
          <TCard />
          <TCard />
          <TCard />
          <TCard />
        </div>
      </div>
    </div>
  );
}

export default Events
