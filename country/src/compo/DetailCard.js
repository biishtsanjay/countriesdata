import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Link, useParams } from "react-router-dom";

const DetailCard = () => {
  const [indiData, setIndiData] = useState([]);
  const { name } = useParams();
  const url = `https://restcountries.com/v2/name/${name}`;
  const getAllData = async () => {
    await axios
      .get(`${url}`)
      .then((response) => {
        setIndiData(response.data);
        // console.log(response.data);
    
      })
      .catch((error) => console.log(`Error: ${error}`));
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      {indiData.map((val) => {
        const {
          population,
          flag,
          nativeName,
          region,
          subRegion,
          capital,
          topLevelDomain,
          currencies,
          languages,
        } = val;
        return (
          <div className="indiDiv">
            <Link to="/">
              <button className="backBtn">&larr; Back</button>
            </Link>
            <div className="mainIndiDiv">
              <img
                className="indiFlagImage"
                src={flag}
                alt="inidvidual_country_flag"
              />
              <div className="indiCardBody">
                <h3>{name}</h3>
                <div className="indiData">
                  <p>
                    <b>Native Name: </b> {nativeName}
                  </p>
                  <p>
                    <b>Population: </b>
                    {population}
                  </p>
                  <p>
                    <b>Region: </b>
                    {region}
                  </p>
                  <p>
                    <b>Sub Region: </b>
                    {subRegion}
                  </p>
                  <p>
                    <b> Capital: </b>
                    {capital}
                  </p>

                  <p>
                    <b>Top Level Domain: </b>
                    {topLevelDomain}
                  </p>
                  <p>
                    <b>Currencies: </b>
                    {currencies[0].name}
                  </p>
                  <p>
                    <b>Languages: </b>
                    {languages[0].name}
                  </p>
                </div>

                <div className="borderCont">
                  <b>Border Countries </b>
                  {console.log("border value is ", val)}
                  {
                  val.borders !== undefined &&
                    val.borders.map((bord) => {
                      return <button>{bord}</button>;
                    })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DetailCard;
