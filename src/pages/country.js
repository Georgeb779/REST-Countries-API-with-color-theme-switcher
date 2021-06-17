import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Country = ({lightMode}) => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const dataCountry = async () => {
      setIsLoading(true);

      try {
        const countryReponse = await axios(
          `https://restcountries.eu/rest/v2/name/${name}`
        );
        setCountry(countryReponse.data);
        setIsLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    };
    dataCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <Loading lightMode={lightMode} />
        </div>
      ) : (
        <div className="deatils">
          <Link to="/" className="deatils-btn ">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Link>
          {country.map((item) => (
            <div className="deatils-country" key={item.name}>
              <div className="deatils-flag">
                <img src={item.flag} alt="imagen de bandera" />
              </div>

              <div className="deatils-info">
                <div className="deatils-main-info">
                  <h1>{item.name}</h1>

                  <p>
                    Native Name:{" "}
                    <span className="country-result">{item.nativeName}</span>{" "}
                  </p>
                  <p>
                    Population:{" "}
                    <span className="country-result">
                      {" "}
                      {item.population.toLocaleString("en-US")}
                    </span>{" "}
                  </p>
                  <p>
                    Region:{" "}
                    <span className="country-result">{item.region}</span>{" "}
                  </p>
                  <p>
                    Sub Region:{" "}
                    <span className="country-result">{item.subregion}</span>{" "}
                  </p>
                  <p>
                    Capital:{" "}
                    <span className="country-result">{item.capital}</span>{" "}
                  </p>
                </div>

                <div className="deatils-secundary">
                  <p>
                    {" "}
                    <span className="country-result"></span> Top Level Domain:{" "}
                    {item.topLevelDomain}{" "}
                  </p>
                  <p>
                    {" "}
                    <span className="country-result"></span> Currencies:{" "}
                    {item.currencies[0].name} ({item.currencies[0].code}){" "}
                  </p>
                  <p>
                    {" "}
                    <span className="country-result"></span> Languague:{" "}
                    {item.languages[0].name}
                  </p>
                </div>

                <div className="deatils-secundary">
                  {item.borders.length > 0 ? (
                    <h2>Border Countries</h2>
                  ) : (
                    <div>
                      <h2>Border Countries</h2>
                      <button className="borders-btn">Not available</button>
                    </div>
                  )}

                  <div className="deatils-border">
                    {item.borders.map((border) => (
                      <div key={Math.floor(Math.random() * 999999)}>
                        <button className="borders-btn">{border}</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Country;
