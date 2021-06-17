// eslint-disable-next-line no-unused-vars
import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/index.scss";
import Header from "./components/Header";
import Search from "./components/Search";
import Loading from "./components/Loading";
import Country from "./pages/country";
import axios from "axios";

const Countries = React.lazy(() => import("./components/Countries"));

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lightMode, setlightMode] = useState(getMode);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const result = await axios("https://restcountries.eu/rest/v2/all");
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    };

    fetchData();
  }, []);

  //setting light mode
  useEffect(() => {
    localStorage.setItem("light", JSON.stringify(lightMode));
  }, [lightMode]);

  function getMode() {
    const savedmode = JSON.parse(localStorage.getItem("light"));
    return savedmode || false;
  }

  if (lightMode === false) {
    const body = document.body;
    body.classList.remove("light-mode");
  } else {
    const body = document.body;
    body.classList.add("light-mode");
  }
  // Estilos

  const darkStyle = {
    backgroundColor: "#2B3945",
    color: "hsl(0, 0%, 98%)",
    fontSize: 16,
  };
  const lightStyle = {
    backgroundColor: "#FFFFFF",
    color: "hsl(207, 26%, 17%)",
    fontSize: 16,
  };

  return (
    <div className="App">
      <Router>
        <Header lightMode={lightMode} setlightMode={setlightMode} />
        <Route exact path="/">
          <Suspense
            fallback={
              <div>
                <Loading lightMode={lightMode} />
              </div>
            }
          >
            <Search setData={setData} />
            <Countries
              data={data}
              isLoading={isLoading}
              lightMode={lightMode}
            />
          </Suspense>
        </Route>
        <Route
          path="/contries/:name"
          children={<Country isLoading={isLoading} lightMode={lightMode} />}
        ></Route>
      </Router>

      <footer style={lightMode === false ? darkStyle : lightStyle}>
        <a
          style={lightMode === false ? darkStyle : lightStyle}
          href="https://github.com/Georgeb779"
          target="_blank"
          rel="noreferrer "
        >
          Developed by GeorgeDev
        </a>
      </footer>
    </div>
  );
}

export default App;
