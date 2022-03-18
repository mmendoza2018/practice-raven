import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./mainCards.css";

const MainCards = ({openModal1,dataCards,deleteCards}) => {
  
  return (
    <div className="container__main__cards">
      <div className="item__main__card">
        <h4 onClick={openModal1}>Working</h4>
        {dataCards.map((card) => {
          if (card.status === "TODO")
            return (
              <Card
                key={card.id}
                id={card.id}
                title={card.name}
                points={card.pointEstimate}
                date={card.createdAt}
                tags={card.tags}
                openModal1 ={openModal1}
                deleteCards ={deleteCards}
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
                id={card.id}
                title={card.name}
                points={card.pointEstimate}
                date={card.createdAt}
                tags={card.tags}
                openModal1 ={openModal1}
                deleteCards ={deleteCards}
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
                id={card.id}
                title={card.name}
                points={card.pointEstimate}
                date={card.createdAt}
                tags={card.tags}
                openModal1 ={openModal1}
                deleteCards ={deleteCards}
              />
            );
        })}
      </div>
    </div>
  );
};

export default MainCards;
