import React from "react";

export default function About(props) {
  return (
    <div
      className="shadow p-3  rounded"
      style={{margin : "20% 5%" , backgroundColor : props.cardBackground, color : props.textColor}}
    >
      <div className="row" style={{backgroundColor : props.cardBackground, color : props.textColor}}>
        <h1 className="center-container">About Me!</h1>
        <div className="col-md-2">
          <img
            src={process.env.PUBLIC_URL + "/sandeep03edu.jpg"}
            alt="about"
            style={{width: "100%", height: "100%"}}
            
          />
        </div>
        <div className="col-md-10 center-container" >
          <p>
            My name is Sandeep Mishra. I am an undergraduate student at Indian
            Institute Of Technology(IIT), Patna. I am currently in my Junior
            Year (3rd Year), pursuing Btech. in Electrical and Electronics
            Engineering.
            <br />
            <br />
            I am majorly an <b>Android Developer</b>, I have experience in both
            Android Developement and Web Development and currently exploring <b>CyberSecurity</b>.
            <br />
            <br />
            I am currently the <b>Overall Coordinator</b> of <b>Not Just Another Coding Klub (NJACK) DEV and Open-Source department</b>
            
          </p>
        </div>
      </div>
    </div>
  );
}
