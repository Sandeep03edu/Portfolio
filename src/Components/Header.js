import React from "react";

export default function Header(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        float: "right",
        position: "fixed",
        top: "0%",
        width: "100%",
        display: "flex",
        marginRight: "3%",
        backgroundColor: "#000",
        zIndex: 1000,
      }}
    >
      <h1
        style={{ marginLeft: 40, flexGrow: 100, fontSize: 25 }}
        className="navbar-brand"
        href="/"
      >
        Sandeep03edu
      </h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Social Media
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a
                className="dropdown-item"
                href="https://www.linkedin.com/in/sandeep03edu/"
                target="blank"
              >
                Linkedin
              </a>
              <a
                className="dropdown-item"
                href="https://www.instagram.com/sandeep03edu"
                target="blank"
              >
                Instagram
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Development Profile
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a
                className="dropdown-item"
                href="https://github.com/sandeep03edu"
                target="blank"
              >
                Github
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Competitive Programming
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a
                className="dropdown-item"
                href="https://codeforces.com/profile/sandeep03edu"
                target="blank"
              >
                Codeforces
              </a>
              <a
                className="dropdown-item"
                href="https://leetcode.com/sandeep03edu/"
                target="blank"
              >
                Leetcode
              </a>
              <a
                className="dropdown-item"
                href="https://atcoder.jp/users/sandeep03edu"
                target="blank"
              >
                Atcoder
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://bit.ly/Sandeep_Mishra_Resume"
              target="blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
