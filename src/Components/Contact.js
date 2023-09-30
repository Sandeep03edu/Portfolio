import React from "react";

export default function Contact(props) {
  let cardBackgroundColor = "#17374c";
  let textColor = "white";

  return (
    <div
      style={{
        marginTop: "8%",
        paddingBottom: "2%",
        color: props.textColor,
        backgroundColor: "#000",
      }}
    >
      <h2
        style={{
          marginTop: "1%",
          marginBottom: "2%",
          paddingTop: "2%",
          color: "#fff",
          fontFamily: "Manrope",
        }}
        className="center-container my-2 header2-style"
      >
        Sandeep Mishra
      </h2>
      <h2
        style={{ color: "#fff" }}
        className="center-container my-2 header3-style "
      >
        Created by @Sandeep03edu
      </h2>
    </div>
  );
}
