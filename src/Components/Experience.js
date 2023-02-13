import React from "react";
import ExperienceItem from "./ExperienceItem";

export default function Experience(props) {
  let cardBackgroundColor = "#17374c";
  let textColor = "white";

  return (
    <div
    className="shadow p-3 rounded"
      style={{
        margin: "20% 5%",
        backgroundColor: props.cardBackground,
        color: props.textColor,
      }}
    >
      <h2 className="my-4 center-container">Work Experience</h2>

      <div className="row my-4 " >
        <div className="col-md-4">
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
              "Reverse engineering, detection and analysis of malwares working.",
              "Created POC (Proof of concept) for some working malwares (like Anubis).",
              "Analyzed android security, loop holes, Android Internals working.",
            ]}
          />
        </div>
        <div className="col-md-4">
          <ExperienceItem
            cardBackground={cardBackgroundColor}
            textColor={textColor}
            role="Internship"
            name="Shree Ramsena"
            urlType="Play Store"
            duration="January 2022 - Present"
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
        <div className="col-md-4">
          <ExperienceItem
            cardBackground={cardBackgroundColor}
            textColor={textColor}
            role="Club Coordinator"
            name="NJACK IIT Patna"
            imageUrl={process.env.PUBLIC_URL + "/njack.jpg"}
            url="https://www.facebook.com/rpvvpaschimvihar/"
            duration="October 2021 - Present"
            details={[
              "Coordinator of Not Just Another Coding Klub (NJACK) DEV and Open-Source department.",
              "Organised India's one of the biggest Month long Hackathon - Codepeak (formly NWOC) with IIT Guwahati's Coding Club.",
              "Organized various dev related events in college.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
