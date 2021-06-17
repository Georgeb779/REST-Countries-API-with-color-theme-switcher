import React from "react";
import ReactLoading from "react-loading";
import { list } from "../components/generic";
import "../styles/sping.css";

const Example = ({ lightMode }) => (
  <section
    className="spin-container"
    style={{
      backgroundColor:
        lightMode === false ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
    }}
  >
    {list.map((l) => (
      <ReactLoading type={l.prop} />
    ))}
  </section>
);

export default Example;
