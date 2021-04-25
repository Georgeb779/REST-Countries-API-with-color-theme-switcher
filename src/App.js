import "./styles/index.scss";

import Header from "./components/Header";
import Search from "./components/Search";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, Suspense, lazy } from "react";
import axios from "axios";

const Countries = React.lazy(() => import("./components/Countries"));

function App() {
  const [data, setData] = useState([]);

  useEffect( () => {
    const fetchData = async ()=>{
      const result = await axios("https://restcountries.eu/rest/v2/region/europe");
      setData(result.data)
    }
    fetchData()
  },[]);

  
  return (
    <div className="App">
      <Header />
      <Search />

      <Suspense fallback={<div>Loading...</div>}>
      <Countries data={data}/>
    </Suspense>
    </div>
  );
}

export default App;
