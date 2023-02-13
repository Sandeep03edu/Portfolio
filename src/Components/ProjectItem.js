import React from "react";

export default function ProjectItem(props) {
  let urlClass = "";
  let size = "0%";
  if (props.urlsData) {
    let urlDataSize = 0;
    urlDataSize = props.urlsData.length;
    size = 100 / urlDataSize - 5 + "%";

    urlDataSize = 12 / urlDataSize;
    urlClass = "col-md-" + urlDataSize + " center-container";
  }

  return (
    <div
      className=" p-2 shadow p-3 mb-5 rounded"
      style={{ backgroundColor: props.cardBackground, color: props.textColor }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h5 className="m-1">{props.type}</h5>

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
            <b>Languages Used: </b>
            {props.language}
          </li>
          <li>
            <b>Tools Used: </b>
            {props.tools}
          </li>
        </ul>
      </div>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <div className="row center-container" width="100%">
          {props.urlsData &&
            props.urlsData.map((data) => {
              return (
                <div key={data.url} className={urlClass} width={size}>
                  <a
                    target="_blank"
                    style={{ color: "white" }}
                    rel="noreferrer"
                    href={data.url}
                    className="href"
                  >
                    <p>{data.type}</p>
                  </a>
                </div>
              );
            })}
        </div>
      </div>

      
    </div>
  );
}
