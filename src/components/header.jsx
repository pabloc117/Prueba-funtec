import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
            <div className="col-md-8  intro-text">
                <h2>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Get Quote Now
                </a>{" "}
                <a
                  href="#features"
                  className="btn btn-dark btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>


                
              </div>
            </div>
          </div>
        </div>

    </header>
  );
};
