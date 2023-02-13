import React, { useState, useEffect } from "react";

export default function Shortcut(props) {
  let size = "5%";

  const [isLargeScreen, setScreenSizeMatch] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setScreenSizeMatch(e.matches));
  }, []);

  return (
    <>
      {isLargeScreen && (
        <div
          className="card "
          style={{
            float: "left",
            position: "fixed",
            top: "40%",
            backgroundColor: props.cardBackground,
            color: props.textColor,
          }}
        >
          <a
            target="_blank"
            style={{ color: "white" }}
            rel="noreferrer"
            className="p-1"
            href="https://github.com/sandeep03edu/"
          >
            <i
              className="fa fa-github icon"
              alt="Bootstrap"
              width={size}
              height={size}
            ></i>
          </a>
          <a
            target="_blank"
            style={{ color: "white" }}
            rel="noreferrer"
            className="p-1"
            href="https://linkedin.com/in/sandeep03edu"
          >
            <i
              className="fa fa-linkedin icon"
              alt="Bootstrap"
              width={size}
              height={size}
            />
          </a>
          <a
            target="_blank"
            style={{ color: "white" }}
            rel="noreferrer"
            className="p-1"
            href="https://www.instagram.com/sandeep03edu/"
          >
            <i
              className="fa fa-instagram icon"
              alt="Bootstrap"
              width={size}
              height={size}
            />
          </a>
        </div>
      )}
    </>
  );
}
