import React from "react";
import EducationItem from "./EducationItem";

export default function Education(props) {
  let cardBackgroundColor = "#17374c";
  let textColor = "white";
  return (
    <div
      className="shadow p-3  rounded"
      style={{
        margin: "20% 5%",
        backgroundColor: props.cardBackground,
        color: props.textColor,
      }}
    >
      <h2 className="center-container my-4 ">Education</h2>
      <div className="row my-4">
        <div className="col-md-4">
          <EducationItem
            cardBackground={cardBackgroundColor}
            textColor={textColor}
            url="https://www.iitp.ac.in/"
            imageUrl={process.env.PUBLIC_URL + "/iitp.png"}
            type="College"
            schoolName="Indian Institute Of Technology, Patna"
            details={[
              "Duration: 2020 - Present",
              "Btech. Electrical and Electronics Engineering",
              "CPI: 8.44 (5th Semester)",
            ]}
          />
        </div>
        <div className="col-md-4">
          <EducationItem
            cardBackground={cardBackgroundColor}
            textColor={textColor}
            url="https://www.facebook.com/rpvvpaschimvihar/"
            imageUrl={process.env.PUBLIC_URL + "/rpvv.jpg"}
            type="Intermediate"
            schoolName="Rajkiya Pratibha Vikas Vidyalaya A-6 Paschim Vihar"
            details={[
              "Duration: 2018-2020",
              "12th Central Board Of Secondary Education",
              "Percentage: 95.8%",
            ]}
          />
        </div>
        <div className="col-md-4">
          <EducationItem
            cardBackground={cardBackgroundColor}
            textColor={textColor}
            url="https://twitter.com/CoedSec"
            imageUrl={process.env.PUBLIC_URL + "/kavitacolony.jpg"}
            type="Matriculation"
            schoolName="Govt. Co-ed. Sr. Sec. School, Kavita Colony, Nangloi, Delhi"
            details={[
              "Duration: 2013-2018",
              "10th Central Board Of Secondary Education",
              "Percentage: 86%",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
