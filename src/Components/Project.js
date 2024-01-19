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
          <div>
            <div>
              <ProjectItem
                cardBackground={cardBackgroundColor}
                textColor={textColor}
                imageUrl={"https://i.imgur.com/GcGh9G8.png"}
                imageClickUrl={"https://imgur.com/a/9sALJkF"}
                name="Sky Chat, Web & Mobile"
                details={[
                  ["Theme", "Real-time Chatting application"],
                  [
                    "Work",
                    "Developed a chat application with real-time messaging, utilizing REST API and Sockets integration.",
                    "Implemented JWT authentication to secure backend APIs and verify users.",
                    "Successfully deployed the application for both Web (using MERN stack) and Mobile (using React-Native).",
                  ],
                  ["Language used", "Javascript"],
                  ["Frameworks used", "React Js, Express Js, React-Native"],
                ]}
                language="Java, C++, XML"
                tools="Firebase, OpenCv"
                urlsData={[
                  {
                    url: "https://github.com/Sandeep03edu/SkyChat",
                    type: "Github",
                  },
                  {
                    url: "https://sky-chat-app.onrender.com/",
                    type: "Web App",
                  },
                  {
                    url: "https://expo.dev/accounts/sandeep03edu/projects/Sky_Chat_App/updates/870f4447-0ce1-42cd-9e22-082bb16c281d",
                    type: "Mobile App",
                  },
                ]}
              />
            </div>
            <div>
              <ProjectItem
                cardBackground={cardBackgroundColor}
                textColor={textColor}
                imageUrl={"https://i.imgur.com/t5j9oqF.jpg"}
                imageClickUrl={"https://i.imgur.com/t5j9oqF.jpg"}
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
                    url: "https://drive.google.com/file/d/1rLXh56AkImqtqyGEK7z4sAuCkEmJT1oy/view",
                    type: "Certificate",
                  },
                  {
                    url: "https://github.com/Sandeep03edu/Highway-Watch",
                    type: "Github",
                  },
                ]}
              />
            </div>

            <div>
              <ProjectItem
                cardBackground={cardBackgroundColor}
                textColor={textColor}
                imageUrl={"https://i.imgur.com/LBWu3ds.jpg"}
                imageClickUrl={"https://i.imgur.com/LBWu3ds.jpg"}
                name="Testa - Obscene Media Detector"
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
                    url: "https://drive.google.com/file/d/1DgB_CjH5wZx87YbF1mVrIThU9H8ziaxE/view",
                    type: "Certificate",
                  },
                  {
                    url: "https://github.com/Sandeep03edu/ocd_module_deployment",
                    type: "Github",
                  },
                ]}
              />
            </div>
            <div>
              <ProjectItem
                cardBackground={cardBackgroundColor}
                textColor={textColor}
                imageUrl={"https://i.imgur.com/OKfgAPO.png"}
                imageClickUrl={"https://i.imgur.com/OKfgAPO.png"}
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
                  {
                    url: "https://user-images.githubusercontent.com/73837113/170855211-7e096c32-e890-4ae4-a1ae-1b07df3bab86.jpg",
                    type: "Flow Chart",
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
