import React from "react";


function Countries({ data }) {
  return (
    <div className="country">
      {data.map((item) => (
        <div key={item.name} className="country-container">
          <div className="country-flag">
            <img src={item.flag} alt="imagen de bandera" />
          </div>

          <div className="country-details">
            <p>{item.name}</p>
            <p>
              Population: <span className="country-result">{item.population.toLocaleString("en-US")}</span>{" "}
            </p>
            <p>
              Region: <span className="country-result">{item.region}</span>{" "}
            </p>
            <p>
              Capital: <span className="country-result"> {item.capital}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Countries;
