import React from "react";

export default function ExperienceItem(props) {
  return (
    <div
      className="p-2 shadow p-3 mb-5 rounded"
      height="200px"
      style={{ backgroundColor: props.cardBackground, color: props.textColor }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h5 className="m-1">{props.role}</h5>

        <img
          height={"150px"}
          width={"150px"}
          style={{ borderRadius: "50%" }}
          className="my-1"
          src={props.imageUrl}
          alt="educationImage"
        />

        <h5 className="m-1">{props.name}</h5>
      </div>

      <div className="container my-3">
        <ul>
          {props.details &&
            props.details.map((data) => {
              return <li key={data}>{data}</li>;
            })}

          <li>
            <b>Duration: </b>
            {props.duration}
          </li>
          <li style={{ display: props.languageUsed == null ? "none" : "" }}>
            <b>Languages Used: </b>
            {props.languageUsed}
          </li>
          <li style={{ display: props.toolsUsed == null ? "none" : "" }}>
            <b>Tools Used: </b>
            {props.toolsUsed}
          </li>
        </ul>
      </div>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <h4 style={{ display: props.toolsUsed == null ? "none" : "" }}>
          <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            {props.urlType}
          </a>
        </h4>
      </div>
    </div>
  );
}
