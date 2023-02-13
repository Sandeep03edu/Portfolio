import React from "react";

export default function Accomplishments(props) {
  return (
    <div className="shadow p-3  rounded " style={{margin : "0px 5%" , backgroundColor : props.cardBackground, color : props.textColor}}>
      <h2 className="center-container">Accomplishments</h2>
      <ul className="m-2">
        <li>
          Selected as a mentee for{" "}
          <b>
            <a
              href="https://acehacker.com/microsoft/engage2022/"
              className="href"
            >
              {" "}
              Microsoft Engage'22 program
            </a>
          </b>
        </li>
        <li>
          Shortlisted as top performers in{" "}
          <b>
            <a
              href="https://unstop.com/hackathon/hackathon-jumpstart-publicis-sapient-359785?utm_campaign=hackathons&utm_medium=d2c-customized&ref_id=opp_359785&utm_source=o_359785"
              className="hred"
            >
              Jumpstart 2022
            </a>
          </b>{" "}
          event conducted by
          <b> Publicis Sapient</b> among <b>29,862</b> candidates.
          </li>
          <li>
            Secured a global rank{" "}
            <b>
              <a
                href="https://www.codechef.com/rankings/COOK143B?itemsPerPage=100&order=asc&page=1&search=sandeep03edu&sortBy=rank"
                className="href"
              >
                415
              </a>
            </b>{" "}
            in <b>Codechef July Cook-Off Div-2</b> and rank&nbsp;
            <b>
              <a
                href="https://www.codechef.com/rankings/START39B?itemsPerPage=100&order=asc&page=1&search=Sandeep03edu&sortBy=rank"
                className="href"
              >
                493
              </a>
            </b>
            &nbsp;in <b>Codechef Starter 39 Div-2.</b>
          </li>
          <li>
            Secured a global rank{" "}
            <b>
              <a
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
                href="https://codeforces.com/contest/1742/standings"
                className="href"
              >
                1742
              </a>
            </b>{" "}
            in
            <b> Codeforces Round 827</b>.
          </li>
          <li>
            <b>4 Star on Codechef</b> with max rating{" "}
            <b>
              <a
                href="https://www.codechef.com/users/sandeep03edu"
                className="href"
              >
                1931
              </a>
            </b>
            , <b>Specialist on Codeforces</b> with max rating{" "}
            <b>
              <a
                href="https://codeforces.com/profile/sandeep03edu"
                className="href"
              >
                1423
              </a>
            </b>{" "}
            and <b>6 Kyu on Atcoder</b> with max rating{" "}
            <b>
              <a target="_blank" style={{color:"white"}}  rel="noreferrer" href="https://atcoder.jp/users/sandeep03edu" className="href">
                {" "}
                912
              </a>
            </b>
            .
          </li>
          <li>
            Secured an All India Rank of <b>8823</b> out of more than <b>0.17</b> million
            candidates in JEE Advanced 2020.
          </li>
          <li>
            Honoured by <b><a target="_blank" style={{color:"white"}}  rel="noreferrer" href="https://twitter.com/msisodia/status/1319999572953890816" className="href"> Delhi Chief Minister and Deputy Cheif minister</a></b> for
            clearing JEE Advance exam without any coaching from government
            school in 2020.
          </li>
          <li>
            <b>Winner and 2nd runner up</b> at Mental Maths State level competition in
            year 2017 and 2018.
          </li>
      </ul>
    </div>
  );
}
