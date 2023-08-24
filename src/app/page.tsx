"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import YouTubeSection from "@/components/YouTubeSection/YouTubeSection";
import JoinForm from "@/components/JoinForm/JoinForm";
import Testimonial from "@/components/Testimonial/Testimonial";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  // To determine wheather or not to show the move to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // To move user to top of the page
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Banner showButton={showButton} />

      <YouTubeSection />
      <JoinForm />
      <Testimonial />
      <FAQ />
      <Footer />
      {showButton && (
        <div
          className="flex items-center cursor-pointer justify-center rounded-xl fixed z-50 bottom-10 right-10 w-16 h-16 bg-red-200 opacity-50"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      )}
    </>
  );
}
