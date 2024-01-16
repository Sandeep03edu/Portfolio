import React from "react";

export default function Accomplishments(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="shadow p-3 rounded"
        style={{
          marginTop: "8%",
          marginRight: "1%",
          marginLeft: "1%",
          width: "80%",
          backgroundColor: props.cardBackground,
          color: props.textColor,
        }}
      >
        <h2
          style={{
            marginTop: "1%",
            marginBottom: "2%",
            fontFamily: "Manrope",
          }}
          className="center-container my-2 header-style"
        >
          Accomplishments
        </h2>
        <ul className="mx-2 my-3 description-style list-group">
          <li className="list-group-item">
            Guided College Juniors in creating an Android app {""}
            <b>
              <a
                style={{ color: "black" }}
                href="https://play.google.com/store/apps/details?id=com.iitp.trakon"
                className="href"
              >
                TrackOn
              </a>
            </b>
            {""} for college Lost & Found activitites
          </li>
          <li className="list-group-item ">
            Selected as a mentee for{" "}
            <b>
              <a
                style={{ color: "black" }}
                href="https://acehacker.com/microsoft/engage2022/"
                className="href"
              >
                {" "}
                Microsoft Engage'22 program
              </a>
            </b>
          </li>
          <li className="list-group-item">
            Shortlisted as top performers in{" "}
            <b>
              <a
                style={{ color: "black" }}
                href="https://unstop.com/hackathon/hackathon-jumpstart-publicis-sapient-359785?utm_campaign=hackathons&utm_medium=d2c-customized&ref_id=opp_359785&utm_source=o_359785"
                className="hred"
              >
                Jumpstart 2022
              </a>
            </b>{" "}
            event conducted by
            <b> Publicis Sapient</b> among <b>29,862</b> candidates.
          </li>
          {/* <li>
          Secured a global rank{" "}
          <b>
            <a
              style={{ color: "black" }}
              href="https://www.codechef.com/rankings/COOK143B?itemsPerPage=100&order=asc&page=1&search=sandeep03edu&sortBy=rank"
              className="href"
            >
              415
            </a>
          </b>{" "}
          in <b>Codechef July Cook-Off Div-2</b> and rank&nbsp;
          <b>
            <a
              style={{ color: "black" }}
              href="https://www.codechef.com/rankings/START39B?itemsPerPage=100&order=asc&page=1&search=Sandeep03edu&sortBy=rank"
              className="href"
            >
              493
            </a>
          </b>
          &nbsp;in <b>Codechef Starter 39 Div-2.</b>
        </li> */}
          {/* <li>
          Secured a global rank{" "}
          <b>
            <a
              style={{ color: "black" }}
              href="https://codeforces.com/contest/1729/standings"
              className="href"
            >
              {" "}
              427
            </a>
          </b>{" "}
          in <b>Codeforces Round 820</b> and rank{" "}
          <b>
            <a
              style={{ color: "black" }}
              href="https://codeforces.com/contest/1742/standings"
              className="href"
            >
              1742
            </a>
          </b>{" "}
          in
          <b> Codeforces Round 827</b>.
        </li> */}
          {/* <li>
          <b>4 Star on Codechef</b> with max rating{" "}
          <b>
            <a
              style={{ color: "black" }}
              href="https://www.codechef.com/users/sandeep03edu"
              className="href"
            >
              1931
            </a>
          </b>
          , <b>Specialist on Codeforces</b> with max rating{" "}
          <b>
            <a
              style={{ color: "black" }}
              href="https://codeforces.com/profile/sandeep03edu"
              className="href"
            >
              1423
            </a>
          </b>{" "}
          and <b>6 Kyu on Atcoder</b> with max rating{" "}
          <b>
            <a
              style={{ color: "black" }}
              target="_blank"
              rel="noreferrer"
              href="https://atcoder.jp/users/sandeep03edu"
              className="href"
            >
              {" "}
              912
            </a>
          </b>
          .
        </li> */}
          <li className="list-group-item">
            Secured an All India Rank of <b>8823</b> out of more than{" "}
            <b>0.17</b> million candidates in JEE Advanced 2020.
          </li>
          <li className="list-group-item">
            Honoured by{" "}
            <b>
              <a
                style={{ color: "black" }}
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/msisodia/status/1319999572953890816"
                className="href"
              >
                {" "}
                Delhi Chief Minister and Deputy Cheif minister
              </a>
            </b>{" "}
            for clearing JEE Advance exam without any coaching from government
            school in 2020.
          </li>
          <li className="list-group-item">
            <b>Winner and 2nd runner up</b> at Mental Maths State level
            competition in year 2017 and 2018.
          </li>
        </ul>
      </div>
    </div>
  );
}
