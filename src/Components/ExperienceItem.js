import React from "react";

export default function ExperienceItem(props) {
  return (
    <div
      className="p-2 p-3 mb-5 row "
      height="200px"
      style={{ backgroundColor: props.cardBackground, color: props.textColor }}
    >
      <div className="col-md-4">
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            height={"250px"}
            width={"250px"}
            style={{ borderRadius: "50%" }}
            className="my-1"
            src={props.imageUrl}
            alt="experienceImage"
          />

          <h5 className="m-1">{props.name}</h5>
        </div>
      </div>

      <div className="col-md-8">
        <h5
          style={{
            fontFamily: "Manrope",
            fontWeight: "700",
            fontSize: 35,
            marginLeft: "5%",
          }}
        >
          {props.role}
        </h5>

        <div className="container my-3">
          <ul>
            {props.details &&
              props.details.map((data) => {
                return (
                  <li
                    style={{ fontFamily: "Poppins", fontSize: 20 }}
                    key={data}
                  >
                    {data}
                  </li>
                );
              })}

            <li style={{ fontFamily: "Manrope", fontSize: 18 }}>
              <b>Duration: </b>
              {props.duration}
            </li>
            <li
              style={{
                display: props.languageUsed == null ? "none" : "",
                fontFamily: "Manrope",
                fontSize: 18,
              }}
            >
              <b>Languages Used: </b>
              {props.languageUsed}
            </li>
            {props.toolsUsed ? (
              <li
                style={{
                  fontFamily: "Manrope",
                  fontSize: 18,
                }}
              >
                <b>Tools Used: </b>
                {props.toolsUsed}
              </li>
            ) : (
              <div style={{ margin: 40 }}></div>
            )}
          </ul>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h4
            style={{
              textAlign: "start",
              display: props.urlType == null ? "none" : "",
              marginLeft: "5%",
            }}
          >
            <a
              href={props.url}
              target="_blank"
              rel="noreferrer"
              style={{ color: props.textColor }}
            >
              {props.urlType}
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}
