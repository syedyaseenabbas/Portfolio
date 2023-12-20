import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import Sidebar from "../../img/sidebar.png";
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
import Portfolio1 from "../../img/Portfolio.PNG";
import Skills from "../../img/Skills.PNG";
import Achievement from "../../img/Achievement.PNG";
import Portfilio_L from "../../img/Portfolio_L.PNG";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Portfolio1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Skills} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Achievement} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfilio_L} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
