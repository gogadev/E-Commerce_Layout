import React from "react";

import loadingGif from "../../assets/spinner.gif";

import "./spinner.style.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner-body">
        <img src={loadingGif} alt="Loading" />
      </div>
    </div>
  );
};

export default Spinner;
