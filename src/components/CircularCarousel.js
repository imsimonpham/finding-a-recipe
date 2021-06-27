import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { CircularCarouselData } from "../data/CircularCarouselData";
import { Colors } from "../data/Variables";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import CarouselStyles from "../styles/CarouselStyles.css";

const Section = styled.section`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselWrapper = styled.div`
  height: 200px;
  width: 1500px;
  padding: 0 2rem;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  cursor: pointer;

  &:hover {
    div {
      background: ${Colors.primaryLight};
    }
  }
  p {
    word-wrap: break-word;
    padding: 0 3px;
    text-align: center;
  }
`;
const OuterCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: relative;
  background: ${Colors.white};
  transition: all ease-in-out 0.3s;
  margin-bottom: 1rem;

  img {
    width: 115px;
    height: 115px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1000, itemsToShow: 5, itemsToScroll: 5 },
  { width: 1200, itemsToShow: 6, itemsToScroll: 6 },
];

const CircularCarousel = (props) => {
  const [ingredientName, setIngredientName] = useState("");
  const searchForDish = (e) => {
    e.preventDefault();
    const clickedIngredient =
      e.currentTarget.firstChild.firstChild.nextSibling.innerText;
    setIngredientName(clickedIngredient);
    props.setValue(clickedIngredient);
  };

  return (
    <Section>
      <CarouselWrapper>
        <Carousel breakPoints={breakPoints} className="carousel" showEmptySlots>
          {CircularCarouselData.map((item, index) => {
            return (
              <Link key={index} to="/" onClick={searchForDish}>
                <Card>
                  <OuterCircle>
                    <img src={item.image} alt="ingredient" />
                  </OuterCircle>
                  <p>{item.title}</p>
                </Card>
              </Link>
            );
          })}
        </Carousel>
      </CarouselWrapper>
    </Section>
  );
};

export default CircularCarousel;
