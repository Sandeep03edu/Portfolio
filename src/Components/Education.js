import React from "react";
import EducationItem from "./EducationItem";

export default function Education(props) {
  let cardBackgroundColor = "#fff";
  let textColor = "#000";
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="shadow p-3  rounded"
        style={{
          marginTop: "8%",
          marginRight: "1%",
          marginLeft: "1%",
          backgroundColor: props.cardBackground,
          color: props.textColor,
          width: "80%",
        }}
      >
        <h2
          className="center-container header-style"
          style={{ fontFamily: "Manrope" }}
        >
          Education
        </h2>
        <div className="row my-4">
          <div className="col-md-12">
            <EducationItem
              cardBackground={cardBackgroundColor}
              textColor={textColor}
              url="https://www.iitp.ac.in/"
              imageUrl={process.env.PUBLIC_URL + "/iitp_campus.webp"}
              type="College"
              schoolName="Indian Institute Of Technology, Patna"
              details={[
                [["Duration:"], ["2020 - 2024 (Expected)"]],
                [
                  ["Degree:"],
                  ["Btech. Electrical and Electronics Engineering"],
                ],
                [["CPI:"], ["8.77 (6th Semester)"]],
              ]}
              reverse={false}
            />
          </div>
          <div className="col-md-12">
            <EducationItem
              cardBackground={cardBackgroundColor}
              textColor={textColor}
              url="https://www.facebook.com/rpvvpaschimvihar/"
              imageUrl={process.env.PUBLIC_URL + "/rpvv.jpg"}
              type="Intermediate"
              schoolName="Rajkiya Pratibha Vikas Vidyalaya A-6 Paschim Vihar"
              details={[
                [["Duration:"], ["2018-2020"]],
                [["Board:"], ["12th Central Board Of Secondary Education"]],
                [["Percentage:"], ["95.8%"]],
              ]}
              reverse={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
