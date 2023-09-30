import React from "react";

export default function About(props) {
  return (
    <div
      id="aboutSection"
      className="shadow p-3 rounded"
      style={{
        margin: "2% 1%",
        backgroundColor: props.cardBackground,
        color: props.textColor,
      }}
    >
      <div
        className="row"
        style={{
          backgroundColor: props.cardBackground,
          color: props.textColor,
        }}
      >
        <h1
          className="center-container header-style"
          style={{ fontFamily: "Manrope" }}
        >
          About Me!
        </h1>

        <div className="col-md-8" style={{ marginTop: "3%" }}>
          <p>
            <p
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "1.25rem",
                fontWeight: 300,
              }}
            >
              My name is Sandeep Mishra.
              <br />I am an undergraduate student at{" "}
              <b>Indian Institute Of Technology (IIT), Patna</b>.
              <br />
              Currently pursuing B.Tech in Electrical and Electronics
              Engineering (2020-2024).
            </p>
            <br />
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "1.1rem",
                fontWeight: 300,
              }}
            >
              I am majorly a <b>Mobile Developer</b> (Native + Hybrid), I have
              experience in both Mobile Developement and Web Development and
              currently exploring <b>Mobile CyberSecurity</b>.
              <br />
              <br />I have completed numerous projects in both Mobile and Web
              Development, some of which also helped the <b>
                Manipur Police
              </b>{" "}
              and the <b>Indian Army</b>.
              <br />
              <br />I have prior experience as an <b>EDG Summer Intern</b> 2023
              at <b>MathWorks Pvt. Ltd.</b>, during which I contributed to the
              development of new features for future releases of MATLAB.
            </p>
          </p>
        </div>
        <div
          className="col-md-4"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={process.env.PUBLIC_URL + "/person_avatar.jpg"}
            alt="about"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
