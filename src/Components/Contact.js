import React from "react";

export default function Contact(props) {
  let cardBackgroundColor = "#17374c";
  let textColor = "white";

  return (
    <div
      className="shadow rounded"
      style={{
        margin: "0% 5%",
        padding: "2% 2%",
        backgroundColor: props.cardBackground,
        color: props.textColor,
      }}
    >
      <h3 className="center-container">Contact Me</h3>

      <div
        className="container m-4 p-2"
        style={{ backgroundColor: cardBackgroundColor, color: textColor }}
      >
        <div className="row ">
          <div className="col-md-8">col1</div>
          
          <div className="col-md-4"> Col2</div>
        </div>
      </div>
    </div>
  );
}
