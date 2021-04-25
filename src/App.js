import "./styles/index.scss";
import Header from "./components/Header";
import Search from "./components/Search";
import Countries from "./components/Countries";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect( () => {
    const fetchData = async ()=>{

      const result = await axios("https://restcountries.eu/rest/v2/all");
      setData(result.data)
    }
    fetchData()
  },[]);
  return (
    <div className="App">
      <Header />
      <Search />
      <Countries data={data}/>
    </div>
  );
}

export default App;
