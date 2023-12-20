import React, { useContext } from "react";
import "./Works.css";
// import Upwork from "../../img/Upwork.png";
import Hero from "../../img/Hero.png"
import Codechef from "../../img/Codechef.png"
import Tata from "../../img/Tata.png"
import Fcc from "../../img/Fcc.png"
import Hackerrank from "../../img/Hackerrank.png"
// import Fiverr from "../../img/fiverr.png";
// import Amazon from "../../img/amazon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            My
          </span>
          <span>Achievements</span>
          <spane>
          <strong>Hackathon: </strong>Selected in Top 60 for a virtual presentation round<br/> among 32,000 teams in Hero-Moto- Corp Campus Challange.
            <br /><br/>
            <srtong>TCS CodeVita: </srtong>Secured 8820 rank among 55,654 Participants.
            <br /><br/>
            <strong>CodeChef Certification: </strong>CodeChef Certified Foundation Level<br/> Data Structures and Algorithms Programme.
            <br /><br/>
            <strong>FreeCodeCamp Certificate: </strong>FreeCodeCamp Certification<br/> for Responsive Web Design.<br/><br/>
            <strong>HackerRank:</strong> Achieved 3 star Badges in Problem Solving, C++, SQL
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Hero} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Tata} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Codechef} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Fcc} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Hackerrank} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
