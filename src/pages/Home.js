import React from "react";
import Hero from "../components/Hero";
import StaffPicks from "../components/StaffPicks";
import CircularCarousel from "../components/CircularCarousel";

const Home = (props) => {
  return (
    <>
      <Hero />
      <CircularCarousel setValue={props.setValue} />
      <StaffPicks value={props.value} setId={props.setId} />
    </>
  );
};

export default Home;
