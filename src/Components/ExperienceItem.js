import React from "react";

export default function ExperienceItem(props) {
  return (
    <div
      className="p-2 p-3 mb-5 row "
      height="200px"
      style={{ backgroundColor: props.cardBackground, color: props.textColor }}
    >
      <div className="col-md-3">
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            width={"80%"}
            style={{ borderRadius: "50%" }}
            className="my-1"
            src={props.imageUrl}
            alt="experienceImage"
          />

          <h5 className="m-1 header2-style mb-4">{props.name}</h5>
        </div>
      </div>

      <div className="col-md-9">
        <h5
          className=" header3-style"
          style={{
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
                  <li className="description-style" key={data}>
                    {data}
                  </li>
                );
              })}

            <li className="description-style">
              <b>Duration: </b>
              {props.duration}
            </li>
            <li
              className="description-style"
              style={{
                display: props.languageUsed == null ? "none" : "",
              }}
            >
              <b>Languages Used: </b>
              {props.languageUsed}
            </li>
            {props.toolsUsed ? (
              <li className="description-style">
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
              className="bold-underline-link"
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
