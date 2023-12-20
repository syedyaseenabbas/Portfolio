import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
// import profilePic1 from "../../img/profile1.jpg";
// import profilePic2 from "../../img/profile2.jpg";
// import profilePic3 from "../../img/profile3.jpg";
import Graduation from "../../img/Graduation.png";
import Up from "../../img/Up.png";
// import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: Graduation,
      review:
        "B.Tech in Computer Science",
      review2:
        "From Abdul Kalam Technical University, Lucknow. Computing is part of everything we do! so I joined Computer Sceience and Engineering. I completed my Graduation with 7.72 CGPA.",
    },
    {
      img: Up,
      review:
        "12th (Intermediate)",
      review2:
        "I completed my 12th from Lucknow Christian Degree College, which is a recognized from U.P Board. I scored 61 percent marks in PCM."
    },
    {
      img: Up,
      review:
        "10th (High School)",
      review2:
        "I completed my 10th from Mufed Model Public High School (MMPHS), which is a recognized from U.P Board. I scored 74.16 percent marks.",
    },
    // {
    //   img: profilePic4,
    //   review:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    // },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>My </span>
        <span>Education </span>
        {/* <span>from me...</span> */}
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        grabCursor={true}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
                <span>{client.review2}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
