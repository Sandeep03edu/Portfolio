import React from "react";

export default function EducationItem(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => {
        window.open(props.url, "_blank");
      }}
    >
      <div
        className=" rounded p-3 row"
        style={
          props.reverse === true
            ? {
                backgroundColor: props.cardBackground,
                color: props.textColor,
                marginBottom: -20,
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                width: "100%",
              }
            : {
                backgroundColor: props.cardBackground,
                color: props.textColor,
                marginBottom: 40,
                alignItems: "center",
                width: "100%",
              }
        }
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <p className="my-2 mx-0 centered" style={{ fontSize: "1.35rem" }}>
            <b>{props.schoolName}</b>
          </p>
        </div>
        <div
          className="col-lg-6 col-xl-5 rounded"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="my-2"
            src={props.imageUrl}
            style={{ width: "100%", height: "auto", overflowY: "scroll" }}
            alt="educationImage"
          />
        </div>

        <div className="col-lg-6 col-xl-7">
          <div className="container my-3">
            {props.details &&
              props.details.map((data, index) => (
                <div className="row mb-2 p-0" key={index}>
                  <div className="form-floating p-0 m-0">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingLabel"
                      placeholder="Password"
                      readOnly
                      value={data[1]}
                      style={{ fontSize: "1rem" }}
                    />
                    <label for="floatingLabel" style={{ fontSize: "1rem" }}>
                      {data[0]}
                    </label>
                  </div>
                </div>
              ))}
          </div>
          <div
            style={{
              textAlign: "center",
            }}
          >
            {/* <button type="button" class="btn btn-outline-primary">
              <a
                href={props.url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                More Details
              </a>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
