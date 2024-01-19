import React, { useState } from "react";
import ExperienceItem from "./ExperienceItem";

export default function Experience(props) {
  let cardBackgroundColor = "#fff";
  let textColor = "#000";

  const [showAllProjects, setShowAllProjects] = useState(false);

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
          className="center-container header-style"
          style={{
            fontFamily: "Manrope",
            marginTop: "1%",
            marginBottom: "2%",
          }}
        >
          Work Experience
        </h2>

        <div>
          <div>
            <div>
              <ExperienceItem
                cardBackground={cardBackgroundColor}
                textColor={textColor}
                urlType="Certificate"
                organization="MathWorks India Private Limited"
                imageUrl={process.env.PUBLIC_URL + "/mathworks.png"}
                url="https://drive.google.com/file/d/1acCiod5-fUc1rjB39_WfZqW0ZsJCN1Ld/view"
                details={[
                  ["Role", "EDG Intern"],
                  ["Duration", "May 2023 - July 2023"],
                ]}
                details2={[
                  [
                    "Work",
                    "Worked on the User Interface for MATLAB Simulink Real-Time Explorer target management",
                    "Enhanced the GUI of the explorer using MATLAB App Designer",
                    "Conducted automated testing of Explorer GUI actions and Backend API calls.",
                  ],
                  ["Tools Used", "Matlab App Designer, Simulink, Matlab GUI"],
                  ["Language Used", "Matlab, C++"],
                ]}
              />
            </div>

            <div>
              <ExperienceItem
                cardBackground={cardBackgroundColor}
                textColor={textColor}
                organization="Indian Army"
                urlType="Certificate"
                imageUrl={process.env.PUBLIC_URL + "/indianArmy.png"}
                url="https://drive.google.com/file/d/1GG3aImLWPqQCCX1ZPVX9nIycRrzDPt8y/view?usp=sharing"
                details={[
                  ["Role", "Project Intern"],
                  ["Duration", "July 2021 - Present"],
                ]}
                details2={[
                  [
                    "Work",
                    "Created POC (Proof of concept) for some working malwares (like Anubis) and tested their functionality",
                    "Analyzed android security, loop holes, Android Internals working.",
                    "Reverse engineering, detection , analysis of malwares working and Android Smali Patching.",
                  ],
                  ["Tools Used", "Apktool, Frida, Jadx-Gui, JD-Gui, Retrofit"],
                  ["Language Used", "Java, XML, Kotlin, C++, Smali, Sqlite"],
                ]}
              />
            </div>

            <button
              type="button"
              className="btn btn-secondary my-2"
              style={{
                width: "100%",
                display: showAllProjects === true ? "none" : "block",
              }}
              onClick={(e) => {
                e.preventDefault();
                setShowAllProjects(!showAllProjects);
              }}
            >
              Show All
            </button>

            <div
              style={{ display: showAllProjects === true ? "block" : "none" }}
            >
              <div>
                <ExperienceItem
                  cardBackground={cardBackgroundColor}
                  textColor={textColor}
                  organization="Shree Ramsena"
                  urlType="Play Store"
                  imageUrl={process.env.PUBLIC_URL + "/ramsena.png"}
                  url="https://play.google.com/store/apps/details?id=com.ramsena.android"
                  details={[
                    ["Role", "Internship"],
                    ["Duration", "January 2022 - May 2023"],
                  ]}
                  details2={[
                    [
                      "Work",
                      "Created complete Social Media app using PHP Apis and later with Firebase, with user interest's post.",
                      "Implemented live chat feature with encryption, super user role, Admin features.",
                      "Implemented one-one and one-many personalised notifcation (custom and automatic).",
                    ],
                    ["Tools Used", "Firebase, FCM , Retrofit"],
                    ["Language Used", "Java, XML"],
                  ]}
                />
              </div>
              <div>
                <ExperienceItem
                  cardBackground={cardBackgroundColor}
                  textColor={textColor}
                  organization="NJACK IIT Patna"
                  urlType="NJACK - Website"
                  imageUrl={process.env.PUBLIC_URL + "/njack.jpg"}
                  url="https://njack.iitp.ac.in/"
                  details={[
                    ["Role", "Club Coordinator"],
                    ["Duration", "October 2021 - May 2023"],
                  ]}
                  details2={[
                    [
                      "Work",
                      "Coordinator of Not Just Another Coding Klub (NJACK) DEV and Open-Source department.",
                      "Organised India's one of the biggest Month long Hackathon - Codepeak (formly NWOC) with IIT Guwahati's Coding Club.",
                      "Organized various dev related events in college.",
                    ],
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
