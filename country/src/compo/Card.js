import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Card = () => {
  const url = "https://restcountries.com/v2/all";
  const [AllData, setAllData] = useState([]);

  const getAllData = async () => {
    await axios
      .get(`${url}`)
      .then((response) => {
        setAllData(response.data);
        console.log(response.data);
        console.log(AllData);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };
  useEffect(() => {
    getAllData();
  },[]);

  return (
    <div className="card" style={{ width: "15rem" }}>
      <img className="card-img-top" src="https://flagcdn.com/ax.svg" alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">Germany</h5>
        <p className="card-text">Population:</p>
        <p className="card-text">Region:</p>
        <p className="card-text">Capital:</p>
      </div>
    </div>
  );
};

export default Card;
