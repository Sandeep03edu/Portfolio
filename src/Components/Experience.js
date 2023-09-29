import React from "react";
import ExperienceItem from "./ExperienceItem";

export default function Experience(props) {
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
        className="center-container"
        style={{
          fontFamily: "Manrope",
          fontWeight: "700",
          fontSize: 50,
          marginTop: "1%",
          marginBottom: "2%",
        }}
      >
        Work Experience
      </h2>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-slide-to="2"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-slide-to="3"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <ExperienceItem
              cardBackground={cardBackgroundColor}
              textColor={textColor}
              role="EDG Intern"
              urlType="Certificate"
              name="Mathworks"
              imageUrl={process.env.PUBLIC_URL + "/mathworks.png"}
              url="https://drive.google.com/file/d/1acCiod5-fUc1rjB39_WfZqW0ZsJCN1Ld/view"
              languageUsed="Matlab, C++"
              toolsUsed="Matlab App Designer, Simulink, Matlab GUI"
              duration="May 2023 - July 2023"
              details={[
                "Worked on the User Interface for MATLAB Simulink Real-Time Explorer target management.",
                "Enhanced the GUI of the explorer using MATLAB App Designer.",
                "Conducted automated testing of Explorer GUI actions and Backend API calls.",
              ]}
            />
          </div>

          <div className="carousel-item">
            <ExperienceItem
              cardBackground={cardBackgroundColor}
              textColor={textColor}
              role="Project Intern"
              urlType="Certificate"
              name="Indian Army"
              imageUrl={process.env.PUBLIC_URL + "/indianArmy.png"}
              url="https://drive.google.com/file/d/1GG3aImLWPqQCCX1ZPVX9nIycRrzDPt8y/view?usp=sharing"
              languageUsed="Java, XML, Kotlin, C++, Smali, Sqlite"
              toolsUsed="Apktool, Frida, Jadx-Gui, JD-Gui, Retrofit"
              duration="July 2021 - Present"
              details={[
                "Created POC (Proof of concept) for some working malwares (like Anubis) and tested their functionality",
                "Analyzed android security, loop holes, Android Internals working.",
                "Reverse engineering, detection , analysis of malwares working and Android Smali Patching.",
              ]}
            />
          </div>

          <div className="carousel-item">
            <ExperienceItem
              cardBackground={cardBackgroundColor}
              textColor={textColor}
              role="Internship"
              name="Shree Ramsena"
              urlType="Play Store"
              duration="January 2022 - May 2023"
              imageUrl={process.env.PUBLIC_URL + "/ramsena.png"}
              url="https://play.google.com/store/apps/details?id=com.ramsena.android"
              languageUsed="Java, XML"
              toolsUsed="Firebase, FCM , Retrofit"
              details={[
                "Created complete Social Media app using PHP Apis and later with Firebase, with user interest's post.",
                "Implemented live chat feature with encryption, super user role, Admin features.",
                "Implemented one-one and one-many personalised notifcation (custom and automatic).",
              ]}
            />
          </div>
          <div className="carousel-item">
            <ExperienceItem
              cardBackground={cardBackgroundColor}
              textColor={textColor}
              role="Club Coordinator"
              name="NJACK IIT Patna"
              urlType="NJACK - Website"
              imageUrl={process.env.PUBLIC_URL + "/njack.jpg"}
              url="https://njack.iitp.ac.in/"
              duration="October 2021 - May 2023"
              details={[
                "Coordinator of Not Just Another Coding Klub (NJACK) DEV and Open-Source department.",
                "Organised India's one of the biggest Month long Hackathon - Codepeak (formly NWOC) with IIT Guwahati's Coding Club.",
                "Organized various dev related events in college.",
              ]}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
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
          href="#carouselExampleIndicators"
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
