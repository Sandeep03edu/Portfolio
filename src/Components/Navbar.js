// rfc
import React from "react";

export default function Navbar() {
  let size = 24;
  return (
    <nav className="navbar bg-body-tertiary py-2 mb-3 px-5 sticky-nav shadow p-3 mb-5 bg-white rounded">
      <div>
        <a target="_blank" style={{color:"white"}}  rel="noreferrer" className="blackBkg" href="/" >
          <i
            className="fa fa-github icon"
            alt="Bootstrap"
            width={size}
            height={size}
          ></i>
        </a>

        <a target="_blank" style={{color:"white"}}  rel="noreferrer" href="/" >
          <i
            className="fa fa-linkedin icon"
            alt="Bootstrap"
            width={size}
            height={size}
          />
        </a>

        <a target="_blank" style={{color:"white"}}  rel="noreferrer" href="/" >
          <i
            className="fa fa-instagram icon"
            alt="Bootstrap"
            width={size}
            height={size}
          />
        </a>
      </div>

      <div className="center-container">
        <i
          className="fa fa-instagram icon"
          alt="Bootstrap"
          width={size}
          height={size}
        ></i>

        <button type="button" className="btn btn-outline-dark ms-3">
          Resume
        </button>

        {/* {process.env.PUBLIC_URL + "/loading.gif"} */}
      </div>
    </nav>
  );
}
