import React, { useState } from "react";
import "./AddTinderCards.css";
import database from "./firebase";
const AddTinderCards = () => {
  const [name, setName] = useState([]);
  const [url, setUrl] = useState([]);
  const handleClick = () => {
    let data = {
      name: name,
      url: url,
    };
    console.log(data);
    if (
      !(name === " " && url === "") &&
      name.length !== 0 &&
      url.length !== 0
    ) {
      database
        .collection("people")
        .add(data)
        .then(() => {
          setName("");
          setUrl("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      window.alert("Please Enter Name or Url");
    }
    // console.log(name, url);
    // let id = database.collection("people").document().getId();
    // database.collection("people").document(id).set(data);
  };
  return (
    <div className="addTinderCards">
      <div className="addTinderCards__name">
        <input
          type="text"
          placeholder="Enter Namer for Card"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="addTinderCards__url">
        <input
          type="text"
          placeholder="Enter Url"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
      </div>
      <button className="addTinderCards__button" onClick={handleClick}>
        Add Card
      </button>
    </div>
  );
};

export default AddTinderCards;
