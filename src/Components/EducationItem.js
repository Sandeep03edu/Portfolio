import React from "react";

export default function EducationItem(props) {
  return (
    <div
      className="p-2 shadow p-3 mb-5 rounded"
      style={{
        backgroundColor: props.cardBackground,
        color: props.textColor,
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h5 className="m-2">{props.type}</h5>

        <img
          height={"150px"}
          width={"150px"}
          style={{ borderRadius: "50%" }}
          className="my-2"
          src={props.imageUrl}
          alt="educationImage"
        />

        <h5 className="my-2 centered">
          <b>{props.schoolName}</b>
        </h5>
      </div>

      <div className="container my-3">
        <ul>
          {props.details &&
            props.details.map((data) => {
              return <li key={data}>{data}</li>;
            })}
        </ul>
      </div>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <h4>
          <a href={props.url} style={{color:"white"}}   target="_blank" rel="noreferrer">
            More Details
          </a>
        </h4>
      </div>
    </div>
  );
}
