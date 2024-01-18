import React from "react";

export default function ExperienceItem(props) {
  return (
    <div
      className="p-3 mt-4 shaadow"
      style={{ backgroundColor: props.cardBackground, color: props.textColor }}
    >
      <div>
        <p className="my-2 mx-0 centered" style={{ fontSize: "1.35rem" }}>
          <h3>{props.organization}</h3>
        </p>
        <div
          className="container my-3 row m-0 p-0"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 ">
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                flexDirection: "column",
              }}
              className="m-2"
            >
              <img
                style={{ width: "100%", height: "auto" }}
                className="my-0"
                src={props.imageUrl}
                alt="experienceImage"
              />
              <div className="py-3 d-sm-none"></div>
            </div>
          </div>
          <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              {props.details &&
                props.details.map((data, index) => {
                  return (
                    <div className="mb-2 p-0" key={index}>
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
        <div className="container my-1 row mx-0">
          {props.details2 &&
            props.details2.map((data, index) => {
              return (
                <div className="mb-2 p-0 " key={index}>
                  <div className="form-floating p-0 m-0">
                    <div
                      className="form-control"
                      id={`dataDisplay_${index}`} // You can use a dynamic ID if needed
                      style={{
                        fontSize: "1rem",
                        // minHeight: "100px",
                        height: "100%",
                        overflowY: "auto",
                      }}
                    >
                      {data &&
                        data.map((res, idx) => {
                          return idx !== 0 && <p className="m-0 p-0">{res}</p>;
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
      <div
        style={{
          textAlign: "center",
        }}
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={(e) => {
            window.open(props.url, "_blank");
          }}
        >
          {props.urlType}
        </button>
      </div>
    </div>
  );
}
