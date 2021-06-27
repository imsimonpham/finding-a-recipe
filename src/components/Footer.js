import React from "react";
import { Colors } from "../data/Variables";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import magazine from "../images/placeholders/lg/magazine.png";

const Section = styled.section`
  min-height: 45vh;
  background: ${Colors.secondary};
`;
const Container = styled.div`
  max-width: 1500px;
  margin: auto;
`;
const FooterTop = styled.div``;
const Title = styled.div`
  /* border: 1px solid black; */
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: ${Colors.primary};
  }
`;
const CollumnsContainer = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    color: ${Colors.black};
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;
const Magazine = styled.div`
  flex-basis: 30%;
  border-right: 1px solid ${Colors.greyLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
  h2 {
    margin-bottom: 1rem;
  }
`;
const MagazineContainer = styled.div`
  width: 270px;
  height: 280px;
  border: 2px solid ${Colors.grey};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;

  h4 {
    color: ${Colors.primary};
    font-weight: 900;
    margin-bottom: 0.3rem;
  }
  p {
    margin-bottom: 0.3rem;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    display: inline-block;
    border: 1px solid ${Colors.greyLight};
    color: ${Colors.white};
    font-weight: 700;
    background: ${Colors.primary};
    padding: 0.8rem 1.3rem;
    cursor: pointer;
    border-radius: 5px;
    transition: all ease-in-out 0.5s;

    &:hover {
      border: 1px solid ${Colors.primary};
      color: ${Colors.primary};
      background: ${Colors.white};
    }
  }
`;
const ImgContainer = styled.div`
  width: 100px;
  height: 130px;
  /* border: 1px solid orange; */
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Connect = styled.div`
  flex-basis: 30%;
  /* border: 1px solid blue; */
  text-align: center;
  padding-bottom: 5rem;
  h2 {
    margin-bottom: 1rem;
  }

  p {
    color: ${Colors.grey};
    margin-bottom: 1rem;
  }

  a {
    font-style: underline;
    color: ${Colors.black};

    &:hover {
      text-decoration: underline;
    }
  }
`;
const SocialMediaContainer = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  a {
    margin-left: 15px;
    text-decoration: none;
    color: ${Colors.primary};
    font-size: 1.1rem;

    &:hover {
      color: ${Colors.gold};
    }
  }
`;
const LearnMore = styled.div`
  flex-basis: 30%;
  border-right: 1px solid ${Colors.greyLight};
  text-align: center;
  padding-bottom: 5rem;

  h2 {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    display: block;
    color: ${Colors.grey};
    font-weight: 700;
    margin-bottom: 1.2rem;
  }
`;
const Facebook = styled(ImFacebook)``;
const Twitter = styled(ImTwitter)``;
const Instagram = styled(FiInstagram)``;
const Pinterest = styled(FaPinterestP)``;
const FooterBottom = styled.div`
  min-height: calc(45vh * 0.15);
  background: ${Colors.greyLight};
  display: flex;
  justify-content: center;
`;
const AllRights = styled.div`
  text-align: left;
  font-size: 0.9rem;
  color: ${Colors.grey};

  @media screen and (max-width: 550px) {
    margin-bottom: 1rem;
  }
`;
const Year = styled.span``;

const Creator = styled.div`
  text-align: right;
  font-size: 0.9rem;
  color: ${Colors.grey};
`;
const Wrapper = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  padding: 1rem;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Title>
            <h1>Try New Recipes With Us </h1>
          </Title>
          <CollumnsContainer>
            <Magazine>
              <h2>Magazines & More</h2>
              <MagazineContainer>
                <h4>GET RECIPELAB MAGAZINE</h4>
                <p>Full Year Just $10</p>
                <ImgContainer>
                  <img src={magazine} alt="magazine" />
                </ImgContainer>
                <Link to="/" className="btn btn-sub">
                  SUBSCRIBE NOW
                </Link>
              </MagazineContainer>
            </Magazine>
            <LearnMore>
              <h2>Learn More</h2>
              <Link to="/">Subscribe</Link>
              <Link to="/">Customer Service</Link>
              <Link to="/">Jobs</Link>
              <Link to="/">Advertise</Link>
              <Link to="/">Content Licensing</Link>
              <Link to="/">Apps</Link>
            </LearnMore>
            <Connect>
              <h2>Connect</h2>
              <p>Follow Us</p>
              <SocialMediaContainer>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.twiiter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Pinterest />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                </a>
              </SocialMediaContainer>
              <Link to="/">Subscribe to our Newsletter</Link>
            </Connect>
          </CollumnsContainer>
        </FooterTop>
      </Container>
      <FooterBottom>
        <Wrapper>
          <AllRights>
            <Year>{new Date().getFullYear()} &copy;</Year> Recipelab - All
            rights reserved
          </AllRights>
          <Creator>Designed & Created by Simon Pham</Creator>
        </Wrapper>
      </FooterBottom>
    </Section>
  );
};

export default Footer;
