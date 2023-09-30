import React from "react";

export default function EducationItem(props) {
  return (
    <div
      className="shadow rounded p-3 row"
      style={
        props.reverse === true
          ? {
              backgroundColor: props.cardBackground,
              color: props.textColor,
              marginBottom: -20,
              display: "flex",
              flexDirection: "row-reverse",
            }
          : {
              backgroundColor: props.cardBackground,
              color: props.textColor,
              marginBottom: 40,
            }
      }
    >
      <div className="col-md-6">
        <img
          className="my-2"
          src={props.imageUrl}
          style={{ maxWidth: "100%", width: "100%", height: "auto" }}
          alt="educationImage"
        />
      </div>

      <div className="col-md-6">
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h5 className="my-2 centered header2-style ">
            <b>{props.schoolName}</b>
          </h5>
        </div>
        <div className="container my-3">
          <ul>
            {props.details &&
              props.details.map((data) => {
                return (
                  <ul>
                    <li className="description-style" key={data}>
                      {data}
                    </li>
                  </ul>
                );
              })}
          </ul>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h4>
            <a
              className="bold-underline-link"
              href={props.url}
              target="_blank"
              rel="noreferrer"
            >
              More Details
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}
