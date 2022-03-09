import React from "react";
import "./App.css";
import Ui from "./compo/Ui";
import NavigationBar from "./compo/NavigationBar";
import DetailCard from "./compo/DetailCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Ui />} />
          <Route path="/country/:name" element={<DetailCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// all data
// https://restcountries.com/v2/all

// by countries
// https://restcountries.com/v2/name/{name}

// by region
// https://restcountries.com/v3.1/region/{region}

// filter by region
// exact UI
// dark mode 
// responsive
