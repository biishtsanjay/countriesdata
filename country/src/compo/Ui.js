import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

const Ui = () => {
  // const { countryRegion } = useParams();
  const url = "https://restcountries.com/v2/all";
  const [AllData, setAllData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [getRegion, setGetRegion] = useState("");
  const urlRegion = `https://restcountries.com/v3.1/region/${getRegion}`;


  const [region, setRegion] = useState();

  const fetchByRegion = async () => {
    await axios
      .get(urlRegion)
      .then((response) => {
        console.log("region data:", response.data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = AllData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(AllData);
    }
  };

  const getAllData = async () => {
    await axios
      .get(`${url}`)
      .then((response) => {
        setAllData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };
  useEffect(() => {
    getAllData();
    fetchByRegion();
    console.log("Region :", getRegion);
    console.log("Region :", region);
    }, [getRegion, region]);

  return (
    <>
      <div className="mainwrapperdiv">
        <div
          className="belowNav"
          style={{ position: "fixed", width: "90%", marginTop: "70px" }}
        >
          <div className="inputDivision">
            <AiOutlineSearch className="AiOutlineSearch" />
            <input
              placeholder="Search For A Country"
              onChange={(e) => searchItems(e.target.value)}
            />
          </div>
          <select
            name="select"
            // placeholder="Filter By Region"
            className="drop"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
        <div className="MapGridSection">
          { searchInput.length > 1
            ? filteredResults.map((val) => {
                const { name, population, region, capital, flag } = val;

                return (
                  <div className="card" style={{ width: "15rem" }}>
                   <img
                      className="card-img-top"
                      src={flag}
                      alt="Card cap"
                      id="FlagHeightDekho"
                    />
                   
                    <div
                      className="card-body"
                      onClick={() => {
                        <Link to={`/country/${name}`} />;
                      }}
                    >
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">
                        <b>Population: </b>
                        {population}
                      </p>
                      <p className="card-text">
                        <b>Region: </b>
                        {region}
                      </p>
                      <p className="card-text">
                        <b>Capital: </b>
                        {capital}
                      </p>
                      <Link to={`/country/${name}`}>Get More Detail</Link>
                    </div>
                  </div>
                );
              })
            :  AllData &&
              AllData.map((val) => {
                const { name, population, region, capital, flag } = val;
                return (
                  <>
                    (<div className="card" style={{ width: "15rem" }}>
                  
                      <img
                        className="card-img-top"
                        src={flag}
                        alt="Card cap"
                        id="FlagHeightDekho"
                      />
                     
                      <div
                        className="card-body"
                        onClick={() => {
                          <Link to={`/country/${name}`} />;
                        }}
                      >
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                          <b>Population: </b>
                          {population}
                        </p>
                        <p className="card-text">
                          <b>Region: </b>
                          {region}
                        </p>
                        <p className="card-text">
                          <b>Capital: </b>
                          {capital}
                        </p>
                      </div>
                      <Link to={`/country/${name}`}>Get More Detail</Link>
                    </div>)
                  </>
                );
              })}   
        </div>
      </div>
    </>
  );
};
export default Ui;
