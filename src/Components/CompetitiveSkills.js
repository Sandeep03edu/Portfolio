import React from "react";

const CompetitiveSkills = (props) => {
  return (
    <div
      className="shadow p-3 rounded"
      style={{
        marginTop: "8%",
        marginRight: "1%",
        marginLeft: "1%",
        backgroundColor: props.cardBackground,
        color: props.textColor,
      }}
    >
      <h2
        className="center-container header2-style mb-4"
        style={{ fontFamily: "Manrope" }}
      >
        Competitive Programming
      </h2>
      <div className="table-responsive ">
        <table className="table table-striped table-row-header table-bordered ">
          <thead>
            <tr>
              <th scope="col">Platform</th>
              <th scope="col">Username</th>
              <th scope="col">Rating</th>
              <th scope="col">Best Rank</th>
            </tr>
          </thead>
          <tbody className="table-row description-style">
            <tr>
              <td>Codeforces</td>
              <td>
                <a
                  className="bold-underline-link"
                  href="https://codeforces.com/profile/sandeep03edu"
                >
                  Sandeep03edu
                </a>
              </td>
              <td>1552 (Specialist)</td>
              <td>
                <a
                  className="bold-underline-link"
                  href="https://codeforces.com/contest/1729/standings/participant/140126541#p140126541"
                >
                  432 - Codeforces Round 820 (Div. 3)
                </a>
              </td>
            </tr>
            <tr>
              <td>Leetcode</td>
              <td>
                <a
                  className="bold-underline-link"
                  href="https://leetcode.com/sandeep03edu/"
                >
                  Sandeep03edu
                </a>
              </td>
              <td>1910 (Knight)</td>
              <td>
                <a
                  className="bold-underline-link"
                  href="https://leetcode.com/contest/biweekly-contest-109/ranking"
                >
                  561 - Biweekly Contest 109
                </a>
              </td>
            </tr>
            <tr>
              <td>Atcoder</td>
              <td>
                <a
                  className="bold-underline-link"
                  href="https://atcoder.jp/users/sandeep03edu"
                >
                  Sandeep03edu
                </a>
              </td>
              <td>1017 (5 Kyu)</td>
              <td>
                <a
                  className="bold-underline-link"
                  href="https://atcoder.jp/contests/abc311/standings?watching=sandeep03edu"
                >
                  736 - Toyota AtCoder Beginner Contest 311
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompetitiveSkills;
