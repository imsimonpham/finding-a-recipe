import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import logo from "../images/logo/logo1.png";
import { BsSearch } from "react-icons/bs";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { Colors } from "../data/Variables";

const Nav = styled.nav`
  background: ${Colors.white};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: fixed;
  width: 100%;
  transition: all 0.5s ease-in-out;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;
const Container = styled.div`
  width: 1500px;
  max-width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  div {
    flex-basis: 30%;
  }

  form {
    flex-basis: 30%;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;

    form {
      order: 2;
      margin-bottom: 0.5rem;
    }

    div {
      order: 3;
      height: 35px;
      margin-bottom: 0.5rem;
      input {
        height: 25px;
      }
    }

    a {
      order: 1;
      margin-bottom: 0.5rem;
      img {
        width: 150px;
      }
    }
  }
`;
const Logo = styled.img``;
const SearchBox = styled.form``;
const InputContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid ${Colors.primary} ;
  border-radius: 5px;
  padding-right: 10px;
  input {
    height: 30px;
    flex-basis: 90%;
    outline: none;
    border: none;
    padding-left: 10px;
    font-size: 1rem;
    color: ${Colors.primary};
    &::-webkit-input-placeholder {
        color: ${Colors.primaryLight};
    }
    &::placeholder{
        color: ${Colors.primaryLight};
    }
  }

}
`;
const SearchIcon = styled(BsSearch)`
  flex-basis: 10%;
  cursor: pointer;
  fill: ${Colors.primary};
`;
const SocialMediaContainer = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: flex-end;

  a {
    margin-left: 15px;
    text-decoration: none;
    color: #189a9d;
    font-size: 1.1rem;

    &:hover {
      color: ${Colors.gold};
    }
  }
`;
const Facebook = styled(ImFacebook)``;
const Twitter = styled(ImTwitter)``;
const Instagram = styled(FiInstagram)``;
const Pinterest = styled(FaPinterestP)``;

const Navbar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const initiateSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      props.setValue(searchTerm);
      setSearchTerm("");
    }
  };

  const initiateSearchByClick = (e) => {
    e.preventDefault();
    props.setValue(searchTerm);
    setSearchTerm("");
  };
  useEffect(() => {}, [searchTerm]);

  const refreshPage = () => {
    setTimeout(function () {
      window.location.reload();
    }, 500);
  };

  return (
    <Nav>
      <Container>
        <SearchBox>
          <InputContainer>
            <input
              type="text"
              placeholder="Find a recipe"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              onKeyPress={initiateSearch}
            />
            <SearchIcon onClick={initiateSearchByClick} />
          </InputContainer>
        </SearchBox>
        <Link to="/" onClick={refreshPage}>
          <Logo src={logo} alt="logo" />
        </Link>

        <SocialMediaContainer>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <Facebook />
          </a>
          <a href="https://www.twiiter.com/" target="_blank" rel="noreferrer">
            <Twitter />
          </a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
            <Pinterest />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Instagram />
          </a>
        </SocialMediaContainer>
      </Container>
    </Nav>
  );
};

export default Navbar;
