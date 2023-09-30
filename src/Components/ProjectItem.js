import React from "react";

export default function ProjectItem(props) {
  let urlClass = "";
  let size = "0%";

  if (props.urlsData) {
    let urlDataSize = 0;
    urlDataSize = props.urlsData.length;
    size = 100 / urlDataSize - 5 + "%";

    urlDataSize = 12 / urlDataSize;
    urlClass = "col-md-" + urlDataSize + "";
  }

  return (
    <div
      className=" p-2 p-3 mb-5 row "
      height="200px"
      style={{ backgroundColor: props.cardBackground, color: props.textColor }}
    >
      <div
        className="col-md-4"
        style={{
          textAlign: "center",
        }}
      >
        <img
          height={"80%"}
          width={"80%"}
          style={{ borderRadius: "50%" }}
          className="my-1"
          src={props.imageUrl}
          alt="projectImage"
        />
        <h5 className="header2-style mb-4 mt-4">{props.type}</h5>
      </div>

      <div className="col-md-8 ">
        <h5 className="header3-style">{props.name}</h5>

        <div className="container my-3">
          <ul>
            {props.details &&
              props.details.map((data) => {
                return (
                  <li className="description-style" key={data}>
                    {data}
                  </li>
                );
              })}

            <li className="description-style">
              <b>Languages Used: </b>
              {props.language}
            </li>
            <li className="description-style">
              <b>Tools Used: </b>
              {props.tools}
            </li>
          </ul>
        </div>

        <div
          className="row center-container"
          width="100%"
          style={{
            display: "flex",
            alignItems: "start",
            alignContent: "start",
          }}
        >
          {props.urlsData &&
            props.urlsData.map((data) => {
              return (
                <div
                  key={data.url}
                  // className={urlClass}
                  style={{
                    width: "auto",
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 5,
                    paddingBottom: 10,
                    backgroundColor: "#0C0084",
                    borderRadius: 60,
                    display: "flex",
                  }}
                >
                  <a
                    target="_blank"
                    style={{
                      color: "#fff",
                      height: 20,
                    }}
                    rel="noreferrer"
                    href={data.url}
                    className="bold-underline-link"
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
