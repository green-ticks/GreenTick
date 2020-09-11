import React from "react";
import MediaQuery from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faHackerrank } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import logo from "./ImageHome.png";
import logoTitle from "./ImageHomeTitle.png";
import tejustiwari from "./Tejus.png";
import pratikjain from "./pratikjain.png";
import agranipatel from "./agrani.png";
import gargseth from "./nityansh.png";
import yash from "./yash.png";
import "./index.css";

const Home = () => {
  return (
    <>
      <div>
        <div class="narrow text-center">
          <div class="image-home">
            <MediaQuery query="(min-width: 1224px)">
              <img src={logoTitle} width="40%" alt="" loading="lazy" />
              <img src={logo} width="55%" alt="" loading="lazy" />
            </MediaQuery>
            <MediaQuery query="(max-width: 1224px)">
              <div>
                <div>
                  <img src={logoTitle} width="70%" alt="" loading="lazy" />
                </div>
                <div>
                  <img src={logo} width="90%" alt="" loading="lazy" />
                </div>
              </div>
            </MediaQuery>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div class="intro">
            <h1 class="quote">
              {" "}
              ~ first solve the problem, then write the code. ~{" "}
            </h1>
            <br></br>
            <br></br>
            <p class="description">
              "Green Tick aims at establishing a competitive programming
              community to enhance the coding culture,reaching every passionate
              coder and providing unlimited resources,weekly contests and tips
              to let you be the coder you've always wanted to be."
            </p>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {/* <div id="features" > */}
          {/* <div classname="jumbotron"> */}
          <div class="narrowt text">
            <div class="col">
              <h1 class="heading">Meet Our Team</h1>

              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div class="heading-underline"></div>
            </div>
            {/* <row> */}
            <div class="row text-center">
              <div class="col">
                <div class="feature">
                  <div class="ap">
                    {" "}
                    <img
                      src={agranipatel}
                      width="187"
                      height="230"
                      alt=""
                      loading="lazy"
                      // data-fa-transform="shrink-3 up-5"
                    />
                  </div>
                  <br></br>
                  <h5 class="name">Agrani Patel</h5>
                  <p>
                    <div class="myintro">
                      Microsoft Student <br></br>Partner{" "}
                    </div>
                    <br></br>
                    EI, Sgsits
                  </p>
                  <div className="social-container">
                    <p>
                      {" "}
                      <a
                        href="https://www.linkedin.com/in/agrani-patel-1813aa172/"
                        className="linkedin social"
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="2x  " />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="feature">
                  <div class="ng">
                    <img
                      src={gargseth}
                      width="230"
                      height="230"
                      alt=""
                      loading="lazy"
                      // data-fa-transform="shrink-3 up-5"
                    />
                  </div>
                  <br></br>
                  <h5 class="name">Nityansh Garg</h5>
                  <p>
                    <div class="myintro">Backend Developer</div>
                    <br></br>
                    <br></br>
                    CS, Sgsits
                  </p>
                  <div className="social-container">
                    <p>
                      {" "}
                      <a
                        href="https://www.linkedin.com/in/nityansh-garg/"
                        className="linkedin social"
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="2x  " />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="feature">
                  <img
                    src={pratikjain}
                    width="193"
                    height="230"
                    alt=""
                    loading="lazy"
                    // data-fa-transform="shrink-1 up-5"
                  />
                  <br></br>
                  <br></br>
                  <h5 class="name">Pratik Jain</h5>
                  <p>
                    <div class="myintro">
                      4★Codechef<br></br> Specialist Codeforces
                    </div>
                    <br></br>
                    CS, Sgsits
                  </p>
                  <div className="social-container">
                    <p>
                      {" "}
                      <a
                        href="https://www.linkedin.com/in/pratik-jain-649878176"
                        className="linkedin social"
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="2x  " />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="feature">
                  <img
                    src={tejustiwari}
                    width="270"
                    height="230"
                    alt=""
                    loading="lazy"
                    // data-fa-transform="shrink-1 up-5"
                  />
                  <br></br>
                  <br></br>

                  <h5 class="name">Tejus Tiwari</h5>
                  <p>
                    <div class="myintro">
                      4★Codechef<br></br> Expert Codeforces
                    </div>
                    <br></br>
                    IT, Sgsits
                  </p>
                  <div className="social-container">
                    <p>
                      {" "}
                      <a
                        href="https://www.linkedin.com/in/tejustiwari"
                        className="linkedin social"
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="2x  " />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="feature">
                  <img
                    src={yash}
                    width="200"
                    height="230"
                    alt=""
                    loading="lazy"
                    // data-fa-transform="shrink-3 up-5"
                  />
                  <br></br>
                  <br></br>

                  <h5 class="name">Yash Tayal</h5>
                  <p>
                    <div class="myintro">
                      5★Codechef<br></br> Expert Codeforces
                    </div>
                    <br></br>
                    IT, Sgsits
                  </p>
                  <div className="social-container">
                    <p>
                      {" "}
                      <a
                        href="https://www.linkedin.com/in/yash-tayal-8013a8172"
                        className="linkedin"
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="2x  " />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <footer>
          <div>
            <center class="foot">
              {/* <div> */}
              <br></br>
              <div class="iconsfooter">
                <a
                  id="linkedin"
                  href="https://tejustiwari.github.io/ComingSoon/#/"
                  className="linkedinfooter social"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x  " />
                </a>
                <a
                  id="telegram"
                  href="https://tejustiwari.github.io/ComingSoon/#/"
                  className="telegram social"
                >
                  <FontAwesomeIcon icon={faTelegram} size="2x  " />
                </a>
                <a
                  id="hackerrank"
                  className="hackerrank social"
                  href="https://tejustiwari.github.io/ComingSoon/#/"
                >
                  <FontAwesomeIcon icon={faHackerrank} size="2x  " />
                </a>
                <a
                  id="instagram"
                  href="https://tejustiwari.github.io/ComingSoon/#/"
                  className="instagram social"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x  " />
                </a>
                <a
                  id="gmail"
                  href="https://tejustiwari.github.io/ComingSoon/#/"
                  className="gmail social"
                >
                  <FontAwesomeIcon icon={faGoogle} size="2x" color="white" />
                </a>
              </div>
              <br></br> <br></br>
              <p class="foot copyright">© Copyright 2020 GreenTick</p>
              <br></br> <br></br>
              <p class="foot heart"> Made in India with ❤ </p>
              {/* </div> */}
            </center>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Home;
