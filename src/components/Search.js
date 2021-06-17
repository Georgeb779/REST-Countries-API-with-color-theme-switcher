import React, { useState, useEffect } from "react";
import axios from "axios";

function Search({ setData }) {


  const [region ,setRegion] =useState("Filter by Region...")

  const searchCountry = async (term) => {
    if (term.length < 2 || term === "") {
      const result = await axios(`https://restcountries.eu/rest/v2/all`);
      setData(result.data);
    } else {
      try {
        const result = await axios(
          `https://restcountries.eu/rest/v2/name/${term}`
        );
        setData(result.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    }
  };




  useEffect(() => {

    const filterByRegion = async () => {
      if (region === "" || region === "Filter by Region...") {
        const result = await axios(`https://restcountries.eu/rest/v2/all`);
        setData(result.data);
      } else {
        try {
          const result = await axios(
            `https://restcountries.eu/rest/v2/region/${region}`
          );
          setData(result.data);
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log("cancelled");
          } else {
            throw error;
          }
        }
      }
    };

    filterByRegion()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region]);



  return (
    <div className="sub-menu">
      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a country..."
          onChange={(term) => searchCountry(term.target.value)}
        />
      </div>
      <div className="filter">
        <select
          name="items"
          id="items"
          onChange={(value) => setRegion(value.target.value)}
        >
          <option value="Filter by Region...">Filter by Region...</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Search;
