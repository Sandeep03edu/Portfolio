import { logDOM } from "@testing-library/react";
import React, { useRef } from "react";
import Typical from "react-typical";

export default function Intro(props) {
  const myRef = useRef();

  return (
    <div className="row" style={{ color: props.textColor, padding: "5% 0%" }}>
      <div
        className="container col-md-12 centered"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "80%" }}>
          <img
            style={{ borderRadius: "5%", marginLeft: 10, marginTop: 10 }}
            src={process.env.PUBLIC_URL + "/profile_intro.jpeg"}
            alt="Profile"
          />
        </div>

        <div style={{ width: "100%", textAlign: "center" }}>
          {/* <h2 className="mt-2">Sandeep Mishra</h2> */}

          <h3
            className="mt-2"
            style={{
              fontFamily: "Manrope",
              fontWeight: "500",
              fontSize: 40,
              marginBottom: 50,
            }}
          >
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

          <div
            className="shadow"
            style={{
              backgroundColor: "#0C0084",
              width: "max-content",
              borderRadius: 50,
              margin: "auto",
            }}
            onClick={(e) => {
              console.log("CLicked!!");
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#aboutSection").offsetTop-80,
                behavior: "smooth",
              });
            }}
          >
            <h5
              style={{
                textAlign: "center",
                paddingLeft: 40,
                paddingRight: 40,
                paddingTop: 10,
                paddingBottom: 10,
                color: "#fff",
                fontFamily: "Roboto",
                fontWeight: "500",
              }}
            >
              About Me
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
