import React, { Component } from "react";
import MediaQuery from "react-responsive";
import "./index.css";
import Table from "./Table.jsx";
// import Footer from "./Footer.jsx";

class GlobalContests extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      future_competitions: [
        {
          link: "https://codeforces.com/contest/1406",
          name: "Codeforces round #670",
          date: "12-09-2020",
          time: "07:05 PM - 09:05 PM"
        },
        {
          link:
            "https://www.facebook.com/codingcompetitions/hacker-cup/2020/round-3/scoreboard",
          name: "Facebook Hacker Cup - Round 3",
          date: "12-09-2020",
          time: "10:30 PM - 01:30 AM"
        },
        {
          link: "https://atcoder.jp/contests/abc178",
          name: "AtCoder Beginner Contest 178",
          date: "13-09-2020",
          time: "05:30 PM - 07:10 PM IST"
        }
      ],
      past_competitions: [
        {
          link: "https://codeforces.com/contest/1407",
          name: "Codeforces round #669",
          date: "08-09-2020",
          time: "08:05 PM - 10:05 PM"
        },
        {
          link: "https://codeforces.com/contest/1404",
          name: "Codeforces round #668",
          date: "06-09-2020",
          time: "08:05 PM - 10:05 PM"
        },
        {
          link:
            "https://www.hackerearth.com/challenges/competitive/september-easy-20/",
          name: "HackerEarth September Easy '20",
          date: "05-09-2020",
          time: "09:30 AM - 12:30 PM"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <MediaQuery query="(max-width: 1224px)">
          <div class="narrow text-center">
            <center>
              <h3> Upcoming Global Contests</h3>
              <br></br>
              <div style={{ width: "90%" }}>
                <div style={{ minWidth: "20%" }}></div>
                <Table data={this.state.future_competitions} />
              </div>
              <br></br>
              <br></br>
              <h3> Past Global Contests</h3>
              <br></br>
              <div style={{ width: "90%" }}>
                <div style={{ minWidth: "20%" }}></div>
                <Table data={this.state.past_competitions} />
              </div>
            </center>
          </div>
        </MediaQuery>

        <MediaQuery query="(min-width: 1224px)">
          <div class="narrow text-center">
            <center>
              <h3> Upcoming Global Contests</h3>
              <br></br>
              <div style={{ width: "50%" }}>
                <div style={{ minWidth: "20%" }}></div>
                <Table data={this.state.future_competitions} />
              </div>
              <br></br>
              <br></br>
              <h3> Past Global Contests</h3>
              <br></br>
              <div style={{ width: "50%" }}>
                <div style={{ minWidth: "20%" }}></div>
                <Table data={this.state.past_competitions} />
              </div>
            </center>
          </div>
        </MediaQuery>
        {/* <Footer></Footer> */}
      </div>
      // }
    );
  }
}
export default GlobalContests;
