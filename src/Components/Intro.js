import React from "react";
import Typical from "react-typical";

export default function Intro(props) {
  return (
    <div
      className="row"
      style={{
        color: props.textColor,
        padding: "5% 0%",
        width: "100%",
      }}
    >
      <div className="col-md-6 image-top-margin">
        <img
          style={{
            borderRadius: "5%",
            width: "100%",
            height: "100%",
          }}
          src={process.env.PUBLIC_URL + "/profile_intro.jpeg"}
          alt="Profile"
        />
      </div>

      <div
        className="col-md-5 header-style"
        style={{ margin: "auto", textAlign: "center", fontFamily: "Manrope" }}
      >
        <h3
          style={{
            margin: 20,
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
              top: document.querySelector("#aboutSection").offsetTop - 80,
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
  );
}
