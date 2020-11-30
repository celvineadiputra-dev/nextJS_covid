import React from "react";

import Header from "../layout/Header/index";

export default function indexPage() {
  const contentStyle = {
    minHeight: "90vh",
    top: "56px",
    backgroundColor: "#f1f1f9",
    overflowX: "hidden",
  };
  return (
    <div style={{ backgroundColor: "#f1f1f9" }}>
      <Header />
      <div className="container content position-relative" style={contentStyle}>
        <div className="row">
          <div className="col-sm-12 justify-content-center text-center">
            <p className="mt-5 h2">Kawal Covid</p>
          </div>
          <div className="col-sm-12 justify-content-center text-center">
            <p>Pantau Covid</p>
          </div>
        </div>
      </div>
    </div>
  );
}
