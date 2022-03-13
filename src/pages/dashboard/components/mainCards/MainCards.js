import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./mainCards.css";
import helpPetition from "../../../../utils/helpPetition";

const MainCards = ({openModal1}) => {
  const [dataCards, setDataCards] = useState([]);
  let { get } = helpPetition();

  useEffect(() => {
    let respuesta = get("https://syn-api-prod.herokuapp.com/tasks").then(
      (res) => {
        if (!res.error) {
          setDataCards(res);
        } else {
          console.log("eror");
        }
      }
    );
  }, []);
  return (
    <div className="container__main__cards">
      <div className="item__main__card">
        <h4 onClick={openModal1}>Working</h4>
        {dataCards.map((card) => {
          if (card.status === "TODO")
            return (
              <Card
                key={card.id}
                title={card.name}
                points={card.pointEstimate}
                date={card.createdAt}
                tags={card.tags}
                openModal1 ={openModal1}
              />
            );
        })}
      </div>
      <div className="item__main__card">
        <h4>In progress</h4>
        {dataCards.map((card) => {
          if (card.status === "IN_PROGRESS")
            return (
              <Card
                key={card.id}
                title={card.name}
                points={card.pointEstimate}
                date={card.createdAt}
                tags={card.tags}
                openModal1 ={openModal1}
              />
            );
        })}
      </div>
      <div className="item__main__card">
        <h4>Completed</h4>
        {dataCards.map((card) => {
          if (card.status === "DONE")
            return (
              <Card
                key={card.id}
                title={card.name}
                points={card.pointEstimate}
                date={card.createdAt}
                tags={card.tags}
                openModal1 ={openModal1}
              />
            );
        })}
      </div>
    </div>
  );
};

export default MainCards;
