import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faHackerrank } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer style={{ bottom: "0" }}>
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
            <br></br>
            <p class="foot copyright">© Copyright 2020 GreenTick</p>
            <br></br>
            <p class="foot heart"> Made in India with ❤ </p>
            {/* </div> */}
          </center>
        </div>
      </footer>
    </>
  );
};
export default Footer;
