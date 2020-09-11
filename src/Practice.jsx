import React, { Component } from "react";
import MediaQuery from "react-responsive";
import "./index.css";
import Table1 from "./Table1.jsx";
// import NavbarLeft from "./NavbarLeft";

class Practice extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      arrays_and_strings: [
        {
          num: 1,
          link: "https://www.codechef.com/problems/SALARY",
          name: "The Minimum Number of Moves",
          platform: "Codechef"
        },
        {
          num: 2,
          link: "https://www.codechef.com/problems/SALARY",
          name: "The Minimum Number of Moves",
          platform: "Codechef"
        },
        {
          num: 3,
          link: "https://www.codechef.com/problems/SALARY",
          name: "The Minimum Number of Moves",
          platform: "Codechef"
        }
      ],
      ad_hoc_problems: [
        {
          num: 1,
          link: "https://www.codechef.com/problems/SALARY",
          name: "The Minimum Number of Moves",
          platform: "Codechef"
        },
        {
          num: 2,
          link: "https://www.codechef.com/problems/SALARY",
          name: "The Minimum Number of Moves",
          platform: "Codechef"
        },
        {
          num: 3,
          link: "https://www.codechef.com/problems/SALARY",
          name: "The Minimum Number of Moves",
          platform: "Codechef"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {/* <NavbarLeft /> */}
        <div class="narrow text-center">
          <MediaQuery query="(min-width: 1224px)">
            <center>
              <h3> Arrays & Strings </h3>
              <br></br>
              <div style={{ width: "50%" }}>
                <div style={{ minWidth: "20%" }}></div>
                <Table1 data={this.state.arrays_and_strings} />
              </div>
              <br></br>
              <br></br>
              <h3> Ad-hoc Problems </h3>
              <br></br>
              <div style={{ width: "50%" }}>
                <div style={{ minWidth: "20%" }}></div>
                <Table1 data={this.state.ad_hoc_problems} />
              </div>
            </center>
          </MediaQuery>
          <MediaQuery query="(max-width: 1224px)">
            <center>
              <h3> Arrays & Strings </h3>
              <br></br>
              <div style={{ width: "90%" }}>
                <div style={{ minWidth: "20%" }}></div>
                <Table1 data={this.state.arrays_and_strings} />
              </div>
              <br></br>
              <br></br>
              <h3> Ad-hoc Problems </h3>
              <br></br>
              <div style={{ width: "90%" }}>
                <div style={{ minWidth: "20%" }}></div>
                <Table1 data={this.state.ad_hoc_problems} />
              </div>
            </center>
          </MediaQuery>
        </div>
      </div>
    );
  }
}
export default Practice;
