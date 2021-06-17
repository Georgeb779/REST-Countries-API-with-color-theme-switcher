import React from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function Countries({ data, isLoading, lightMode }) {
  let datas = data.slice(0, 10);
  return (
    <div>
      {isLoading ? (
        <div>
          {" "}
          <Loading lightMode={lightMode} />
        </div>
      ) : (
        <div className="country">
          {datas.map((item) => (
            <div key={item.name} className="country-container">
              <Link to={`/contries/${item.name}`} className="style-link">
                <div className="country-flag">
                  <img src={item.flag} alt="imagen de bandera" />
                </div>
                <div className="country-details">
                  <p>{item.name}</p>
                  <p>
                    Population:{" "}
                    <span className="country-result">
                      {item.population.toLocaleString("en-US")}
                    </span>{" "}
                  </p>
                  <p>
                    Region:{" "}
                    <span className="country-result">{item.region}</span>{" "}
                  </p>
                  <p>
                    Capital:{" "}
                    <span className="country-result"> {item.capital}</span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Countries;
