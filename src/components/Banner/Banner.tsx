"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faUsers,
  faSuitcase,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";

import "./Banner.css";
import Navbar from "../Navbar/Navbar";

// props types
interface BannerProps {
  showButton: boolean;
}

const Banner: React.FC<BannerProps> = ({ showButton }) => {
  const swipeData = [
    {
      icon: faGlobe,
      subtitle: "Destinations",
      description:
        " Explore a wide range of breathtaking destinations around the world. From stunning beaches to majestic mountains, we offer a variety of options to satisfy your wanderlust.",
    },
    {
      icon: faUsers,
      subtitle: "Expert Guides",
      description:
        "  Our expert guides are passionate about travel and possess in-depth knowledge of the destinations. They will provide you with valuable insights, recommendations, and local tips for an unforgettable journey.",
    },
    {
      icon: faSuitcase,
      subtitle: "Flexible Packages",
      description:
        " Choose from a variety of flexible travel packages that cater to your preferences. Whether you're seeking adventure, relaxation, or cultural experiences, we have the perfect package for you.",
    },
    {
      icon: faHeadset,
      subtitle: "24/7 Support",
      description:
        "  We understand that travel plans can change and unexpected situations may arise. That's why our dedicated support team is available 24/7 to assist you with any queries or issues you may encounter during your journey.",
    },
  ];

  return (
    <>
      {!showButton && <Navbar />}
      {/* <Navbar /> */}
      <div className="h-screen">
        <Swiper
          speed={2000}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="myBannerSwiper absolute "
        >
          <div
            slot="container-start"
            className="parallax-bg bg-[url(https://images.pexels.com/photos/931881/pexels-photo-931881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]"
            data-swiper-parallax="-23%"
          >
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="h-full bg-gradient-to-b from-transparent via-transparent to-white"></div>
            </div>
          </div>
          {swipeData.map((ele, index) => (
            <SwiperSlide
              key={index}
              className="myBannerSwiper-slide md:ml-10 mt-32 sm:mt-28  md:mt-52"
            >
              <div>
                <div
                  className="title font-extrabold"
                  data-swiper-parallax="-300"
                >
                  <FontAwesomeIcon
                    icon={ele.icon}
                    className="text-red-500 text-4xl md:text-6xl sm:text-7xl mb-2"
                  />
                </div>
                <div
                  className=" text text-[25px] sm:text-[35px] font-normal "
                  data-swiper-parallax="-200"
                >
                  {ele.subtitle}
                </div>
                <div
                  className="text text-[15px] sm:text-[20px] font-medium"
                  data-swiper-parallax="-100"
                >
                  <p>{ele.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
