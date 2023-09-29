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
          height={"250px"}
          width={"250px"}
          style={{ borderRadius: "50%" }}
          className="my-1"
          src={props.imageUrl}
          alt="projectImage"
        />
        <h5 className="m-3">{props.type}</h5>
      </div>

      <div className="col-md-8">
        <h5
          style={{
            fontFamily: "Manrope",
            fontWeight: "700",
            fontSize: 35,
            marginLeft: "3%",
          }}
        >
          {props.name}
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
              <b>Languages Used: </b>
              {props.language}
            </li>
            <li style={{ fontFamily: "Manrope", fontSize: 18 }}>
              <b>Tools Used: </b>
              {props.tools}
            </li>
          </ul>
        </div>

        <div className="row center-container" width="100%" style={{display:"flex",alignItems:"start", alignContent:"start"}}>
          {props.urlsData &&
            props.urlsData.map((data) => {
              return (
                <div
                  key={data.url}
                  className={urlClass}
                  width={size}
                  style={{ alignItems: "center" }}
                >
                  <div
                    style={{
                      backgroundColor: "#0C0084",
                      paddingLeft: 30,
                      paddingRight: 30,
                      paddingTop: 10,
                      borderRadius: 60,
                    }}
                  >
                    <a
                      target="_blank"
                      style={{
                        color: "#fff",
                        textAlign: "center",
                      }}
                      rel="noreferrer"
                      href={data.url}
                      className="href"
                    >
                      <p>{data.type}</p>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
