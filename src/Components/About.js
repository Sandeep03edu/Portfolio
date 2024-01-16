import React from "react";

export default function About(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        id="aboutSection"
        className="shadow p-3 rounded"
        style={{
          width: "80%",
          margin: "2% 1%",
          backgroundColor: props.cardBackground,
          color: props.textColor,
        }}
      >
        <div
          style={{
            backgroundColor: props.cardBackground,
            color: props.textColor,
          }}
        >
          <h1
            className="center-container header-style"
            style={{
              fontFamily: "Manrope",
              fontSize: "2rem",
              marginBottom: "3%",
            }}
          >
            About Me!
          </h1>

          <div
            className="d-lg-none"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={process.env.PUBLIC_URL + "/person_avatar.jpg"}
              alt="about"
              style={{
                maxWidth: "250px",
                width: "100%",
                height: "250px",
              }}
            />
          </div>
          <div className="row">
            <div className="col-xl-9 col-lg-8">
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
                  I am majorly a <b>Mobile Developer</b> (Native + Hybrid), I
                  have experience in both Mobile Developement and Web
                  Development and currently exploring{" "}
                  <b>Mobile CyberSecurity</b>.
                  <br />
                  <br />I have completed numerous projects in both Mobile and
                  Web Development, some of which also helped the{" "}
                  <b>Manipur Police</b> and the <b>Indian Army</b>.
                  <br />
                  <br />I have prior experience as an <b>
                    EDG Summer Intern
                  </b>{" "}
                  2023 at <b>MathWorks Pvt. Ltd.</b>, during which I contributed
                  to the development of new features for future releases of
                  MATLAB.
                </p>
              </p>
            </div>
            <div
              className="col-xl-3 col-lg-4 d-none d-lg-flex"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/person_avatar.jpg"}
                alt="about"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
