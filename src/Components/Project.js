import React from "react";
import ProjectItem from "./ProjectItem";

export default function Project(props) {
  let cardBackgroundColor = "#fff";
  let textColor = "#000";

  return (
    <div
      className="shadow p-3 rounded"
      style={{
        marginTop: "8%",
        marginRight: "1%",
        marginLeft: "1%",
        backgroundColor: props.cardBackground,
        color: props.textColor,
      }}
    >
      <h2
        style={{
          fontFamily: "Manrope",
          fontWeight: "700",
          fontSize: 50,
          marginTop: "1%",
          marginBottom: "2%",
        }}
        className="center-container my-4 "
      >
        Projects
      </h2>

      <div
        id="carouselProjectIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselProjectIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#carouselProjectIndicators"
            data-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselProjectIndicators"
            data-slide-to="2"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
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
                // {
                //   url: "https://user-images.githubusercontent.com/73837113/170855211-7e096c32-e890-4ae4-a1ae-1b07df3bab86.jpg",
                //   type: "Flow Chart",
                // },
                // {
                //   url: "https://drive.google.com/file/d/1TYlc7Kx_-6HHwS35dGARzO7a78_Eq654/view?usp=share_link",
                //   type: "Presentation",
                // },
                {
                  url: "https://github.com/Sandeep03edu/FaceRecognition/",
                  type: "Github",
                },
              ]}
            />
          </div>
          <div className="carousel-item">
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
          <div className="carousel-item">
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
        <a
          className="carousel-control-prev"
          href="#carouselProjectIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselProjectIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
