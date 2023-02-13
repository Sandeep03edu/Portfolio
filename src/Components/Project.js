import React from "react";
import ProjectItem from "./ProjectItem";

export default function Project(props) {
  let cardBackgroundColor = "#17374c";
  let textColor = "white";

  return (
    <div
      className="shadow p-3 rounded"
      style={{
        margin: "20% 5% 5% 5%",
        backgroundColor: props.cardBackground,
        color: props.textColor,
      }}
    >
      <h2 className="center-container my-4 ">Projects</h2>

      <div className="row my-4 ">
        <div className="col-md-4">
          <ProjectItem
            cardBackground={cardBackgroundColor}
            textColor={textColor}
            type="Microsoft Engage'22"
            imageUrl={process.env.PUBLIC_URL + "/diseaseDetection.jpg"}
            name="Face Disease Recognition"
            details={[
              "Android application to detect facial disease using OpenCv and ML models.",
              "Spllited face into 68 landmarks and cropping each face part for disease detection.",
              "Uploading user's data in backend to display past history for future analysis",
              "Displayed Advertisements from backend based on Age and gender of persons standing in front of it",
            ]}
            language="Java, C++, XML"
            tools="Firebase, OpenCv"
            urlsData={[
              {
                url: "https://user-images.githubusercontent.com/73837113/170855211-7e096c32-e890-4ae4-a1ae-1b07df3bab86.jpg",
                type: "Flow Chart",
              },
              {
                url: "https://drive.google.com/file/d/1TYlc7Kx_-6HHwS35dGARzO7a78_Eq654/view?usp=share_link",
                type: "Presentation",
              },
              {
                url: "https://github.com/Sandeep03edu/FaceRecognition/",
                type: "Github",
              },
            ]}
          />
        </div>
        <div className="col-md-4">
          <ProjectItem
            cardBackground={cardBackgroundColor}
            textColor={textColor}
            type="Prof. Joydeep Chandra (IIT Patna)"
            imageUrl={process.env.PUBLIC_URL + "/cawach.png"}
            name="Cawach"
            details={[
              "Applied Tensorflow ML model in android for practical application",
              "Fetched user media files and checked their obscenity score",
              "Filtered obscene images of a directory and outputed report in pdf format.",
            ]}
            language="Java, C++, XML"
            tools="Firebase"
            urlsData={[
              {
                url: "https://github.com/Sandeep03edu/ocd_module_deployment",
                type: "Github",
              },
            ]}
          />
        </div>
        <div className="col-md-4">
          <ProjectItem
            cardBackground={cardBackgroundColor}
            textColor={textColor}
            type="Manipur Police"
            imageUrl={process.env.PUBLIC_URL + "/highwayWatch.png"}
            name="Highway-Watch"
            details={[
              "Android app for Manipur police.",
              "Live location tracking app based on Vehichle, Highway and Sector with long persistence.",
              "Memory optimised background running application for continuous location updates.",
            ]}
            language="Java, XML"
            tools="Firebase"
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
  );
}
