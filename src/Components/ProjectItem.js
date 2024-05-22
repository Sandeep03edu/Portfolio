import React from "react";

export default function ProjectItem(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="my-2 mx-0 centered" style={{ fontSize: "1.35rem" }}>
        <h3>{props.name}</h3>
      </div>
      <div
        className="px-3 py-0 mb-5 row"
        style={{
          backgroundColor: props.cardBackground,

          color: props.textColor,
        }}
      >
        <div
          className="col-md-6 col-lg-5 col-xl-3"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            height={"auto"}
            width={"100%"}
            src={props.imageUrl}
            alt="projectImage"
            className="mx-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.open(props.imageClickUrl);
            }}
          />
          <div
            className="row center-container py-2 px-0"
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              alignItems: "start",
              alignContent: "start",
            }}
          >
            {props.urlsData &&
              props.urlsData.map((data) => {
                return (
                  <button
                    key={data.url}
                    type="button"
                    className="btn btn-outline-primary m-1"
                    onClick={(e) => {
                      window.open(data.url, "_blank");
                    }}
                    style={{ width: "auto" }}
                  >
                    {data.type}
                  </button>
                );
              })}
          </div>
        </div>

        <div className="col-md-6 col-lg-7 col-xl-9">
          <div
            className="container my-3"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* <ul> */}
            {props.details &&
              props.details.map((data, index) => {
                return (
                  <div
                    className="mb-2 p-0"
                    key={index}
                    style={{ width: "100%" }}
                  >
                    <div className="form-floating p-0 m-0">
                      <div
                        className="form-control"
                        id={`dataDisplay_${index}`}
                        style={{
                          fontSize: "1rem",
                          height: "100%",
                          overflowY: "auto",
                        }}
                      >
                        <ul className="m-0 px-3">
                          {data &&
                            data.map((res, idx) => {
                              return (
                                idx !== 0 && (
                                  <li key={res} className="mx-0 my-1 p-0">
                                    {res}
                                  </li>
                                )
                              );
                            })}
                        </ul>
                      </div>

                      <label
                        htmlFor={`dataDisplay_${index}`}
                        style={{ fontSize: "1rem" }}
                      >
                        {data[0]}
                      </label>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
