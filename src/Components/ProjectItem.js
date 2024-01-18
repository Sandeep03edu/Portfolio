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
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p className="my-2 mx-0 centered" style={{ fontSize: "1.35rem" }}>
        <h3>{props.name}</h3>
      </p>
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
              window.open(props.imageUrl);
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
                    className="btn btn-outline-primary"
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
                        {data &&
                          data.map((res, idx) => {
                            return (
                              idx !== 0 && <p className="m-0 p-0">{res}</p>
                            );
                          })}
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
