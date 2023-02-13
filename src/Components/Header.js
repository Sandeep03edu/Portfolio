import React from "react";

export default function Header(props) {
  return (
    <div>
      <div
        className="card"
        style={{ float: "right", position: "fixed", top: "0%" , backgroundColor : props.cardBackground, color : props.textColor}}
      >
        <h3 className="px-3 py-1 ">Sandeep03Edu</h3>
      </div>
      <div
        className="card"
        style={{ float: "right", position: "fixed", top: "0%", right: "0%",  backgroundColor : props.cardBackground, color : props.textColor}}
      >
        <h3 className="px-3 py-1 ">
          <a target="_blank" style={{color:"white"}}  rel="noreferrer" href="https://drive.google.com/file/d/1j8Pj8nOvVcjqZ_l5qCneibimIfJUCOuh/view?usp=share_link" className="href">
            Resume
          </a>
        </h3>
      </div>
    </div>
  );
}
