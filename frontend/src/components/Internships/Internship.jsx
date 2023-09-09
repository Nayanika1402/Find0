import ICard from "../../cards/Internship Card/ICard";
import './Internship.css'
import { useEffect, useState } from "react";
import axios from "axios";








const Internship = () => {

    const [idata, setData] = useState([]);
    useEffect(() => {
      axios
        .get(`https://find0.onrender.com/api/internships`, {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);


  return (
    <div className="upperSectionHeadings">
      <div className="internships">
        <h3>
          <span>Internships </span>
        </h3>
        <div className="events">
          {idata.map((item, index) => {
            return (
              <ICard
                key={index}
                role={item.role}
                companyName={item.companyName}
                imgUrl={item.imgUrl}
                link={item.link}

              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Internship
