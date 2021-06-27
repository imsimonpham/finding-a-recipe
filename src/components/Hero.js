import React from "react";
import bg from "../images/bg/bg-1.jpg";
import styled, { css } from "styled-components/macro";

const HeroSection = styled.section`
  height: 600px;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Hero = () => {
  return <HeroSection></HeroSection>;
};

export default Hero;
