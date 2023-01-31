import { Fragment } from "react";
import {
  Location,
  Link21,
  DollarCircle,
  Copyright,
  CallCalling,
} from "iconsax-react";

import config from "./../config.json";

const Footer = () => {
  return (
    <Fragment>
      <div className="Footer">
        <div className="textFooter">
          <center>
            <img
              src="https://raw.githubusercontent.com/artafp/artafp/main/name.jpeg"
              className="imgFooter"
            />
          </center>
          <div>
            <br />
            <h5> arta fallahpoor </h5>
            <h6>artafp</h6>
            <hr />
            <h6>
              I am Arta Fallahpour And I live in Gilan Lahijan I am interested
              in programming and I am studying computer science at Gilan
              University .
            </h6>
            <hr />
            <h6>
              {" "}
              <Location size="24" color="#697689" variant="Bulk" /> iran gilan
              lahijan
            </h6>
            <h6>
              {" "}
              <Link21 size="24" color="#697689" variant="Bulk" />{" "}
              <a href="http://artafp.ir">artafp.ir</a>
            </h6>
            <h6>
              {" "}
              <Link21 size="24" color="#697689" variant="Bulk" />{" "}
              <a href="http://github.com/artafp">github.com/artafp</a>
            </h6>
            <h6>
              {" "}
              <CallCalling size="24" color="#697689" variant="Bulk" />{" "}
              <a href="http://t.me/hallo_apta"> t.me/hallo_apta </a>
            </h6>
            <h6>
              {" "}
              <DollarCircle size="24" color="#697689" variant="Bulk" />{" "}
              <a href="https://zarinp.al/artafallahpoor">donate me </a>
            </h6>
          </div>
        </div>{" "}
        <div className="powerbyFooterM">
          {" "}
          <h5> Made with </h5>
          <hr />
          <div className="powerbyFooter">
            <img src="./../../img/pages.png" className="pages" />
            <img src="./../../img/router.png" className="pages" />
            <img src="./../../img/react.png" className="react" />
            <img src="./../../img/cloudfler.png" className="cloud" />
            <img src="./../../img/redux.png" className="cloud" />
            <img src="./../../img/axios.png" className="axios" />
          </div>
        </div>
      </div>
      <center className="copyright">
        <Copyright size="24" color="#000" style={{ marginRight: "5px" }} />
        {"  "} copyright | 2023 | Copying is permitted if the developer's name
        appears at the bottom of the screen <br />
        The name of the developer : artafp.ir or github.com/artafp
      </center>
      <br />
    </Fragment>
  );
};

export default Footer;
