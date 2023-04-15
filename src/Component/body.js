import React from "react";
import { useState } from "react";
import "../styles/body.css";

function Body() {
  var destination = "";
  var url;
  const [temp, setTemp] = useState(null);
  const [feel, setFeel] = useState(" ");
  const [City, setCity] = useState(null);

  const handleSearch = (e) => {
    var d = e.target.value;
    destination = d;
    console.log(destination);
    url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      destination +
      "&appid=f56f24967aaf51182d1d4df628297c6d";
  };
  const handleSubmit = async () => {
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        let tmp = result.main.temp;
        let feel = result.weather[0].description;
        tmp = Math.round(tmp);
        destination=destination.toUpperCase();
        setTemp(tmp - 273);
        setFeel(feel);
        setCity(destination);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <div className="container">
        <div className="form">
          <form id="iam_form" action="/" method="post">
            <input
              id="searchbar"
              onChange={handleSearch}
              type="text"
              name="srch"
            />
            <input
              className="custom-btn btn-8"
              onClick={handleSubmit}
              type="button"
              value="FIND"
            />
          </form>
        </div>
        <div className="details">
          <div className="tempe">
            <h4>{City}</h4>
          </div>
          <div className="tempe">
            <h4>
              {temp ? temp : ""} {temp && <p>&#176;C</p>}
            </h4>
          </div>
          <div className="feel">
            <h3>{feel}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
