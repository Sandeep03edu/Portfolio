import React from "react";
import ProjectItem from "./ProjectItem";

export default function Project(props) {
  let cardBackgroundColor = "#fff";
  let textColor = "#000";

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="shadow p-3 rounded"
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
          style={{
            marginTop: "1%",
            marginBottom: "2%",
            fontFamily: "Manrope",
          }}
          className="header-style center-container my-2 "
        >
          Projects
        </h2>

        <div>
          <div className="">
            <div className="">
              <ProjectItem
                cardBackground={cardBackgroundColor}
                textColor={textColor}
                imageUrl={"https://i.imgur.com/LBWu3ds.jpg"}
                name="Face Disease Recognition"
                details={[
                  ["Event", "Microsoft Engage'22"],
                  [
                    "Work",
                    "Android application to detect facial disease using OpenCv and ML models.",
                    "Spllited face into 68 landmarks and cropping each face part for disease detection.",
                    "Uploading user's data in backend to display past history for future analysis",
                    "Displayed Advertisements from backend based on Age and gender of persons standing in front of it",
                  ],
                  ["Language used", "Java, C++, XML"],
                  ["Tools used", "Firebase, OpenCv"],
                ]}
                language="Java, C++, XML"
                tools="Firebase, OpenCv"
                urlsData={[
                  {
                    url: "https://github.com/Sandeep03edu/FaceRecognition/",
                    type: "Github",
                  },
                ]}
              />
            </div>
            <div className="">
              <ProjectItem
                cardBackground={cardBackgroundColor}
                textColor={textColor}
                imageUrl={"https://i.imgur.com/LBWu3ds.jpg"}
                name="Cawach"
                details={[
                  ["Mentor", "Prof. Joydeep Chandra"],
                  [
                    "Work",
                    "Applied Tensorflow ML model in android for practical application",
                    "Fetched user media files and checked their obscenity score",
                    "Filtered obscene images of a directory and outputed report in pdf format.",
                  ],
                  ["Language used", "Java, C++, XML"],
                  ["Tools used", "Firebase"],
                ]}
                urlsData={[
                  {
                    url: "https://github.com/Sandeep03edu/ocd_module_deployment",
                    type: "Github",
                  },
                ]}
              />
            </div>
            <div className="">
              <ProjectItem
                cardBackground={cardBackgroundColor}
                textColor={textColor}
                imageUrl={"https://i.imgur.com/LBWu3ds.jpg"}
                name="Highway-Watch"
                details={[
                  ["Organization", "Manipur Police"],
                  [
                    "Work",
                    "Android app for Manipur police.",
                    "Live location tracking app based on Vehichle, Highway and Sector with long persistence.",
                    "Memory optimised background running application for continuous location updates.",
                  ],
                  ["Language used", "Java, XML"],
                  ["Tools used", "Firebase"],
                ]}
                urlsData={[
                  {
                    url: "https://github.com/Sandeep03edu/Highway-Watch",
                    type: "Github",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
