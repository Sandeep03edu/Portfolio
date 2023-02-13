import React from "react";
import Typical from "react-typical";

export default function Intro(props) {
  return (
    <div className="row" style={{ color: props.textColor, padding: "5% 0%" }}>
      <div
        className="container col-md-12 centered"
        style={{ margin: "10% 0%" }}
      >
        <div className="container">
          <img
            height={"250px"}
            style={{ borderRadius: "50%" }}
            src={process.env.PUBLIC_URL + "/sandeep03edu.jpg"}
            alt="Profile"
          />
        </div>

        <h2 className="mt-2">Sandeep Mishra</h2>

        <h3 className="mt-2">
          I am{" "}
          <span>
            <Typical
              steps={[
                "Android Developer",
                2000,
                "Competitive Programmer",
                2000,
                "Electrical and Electronics Engineer",
                2000,
                "Web Developer",
                2000,
                "Cybersecurity Enthusiast",
                2000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </span>
        </h3>
      </div>
    </div>
  );
}
