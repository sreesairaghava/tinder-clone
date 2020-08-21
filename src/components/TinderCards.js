// @filename: TinderCards.js
// @desc: This file is using react-tinder-cards module
//        using the funtionality (swipe)
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";
function TinderCards(props) {
  // UseState is a react Hook
  const [people, setPeople] = useState([]);
  useEffect(() => {
    //This code runs only once when component loads and never again
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            preventSwipe={["up", "down"]}
            key={person.name}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3> {person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
