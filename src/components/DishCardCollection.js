import React from "react";
import styled, { css } from "styled-components/macro";
import { Colors } from "../data/Variables";
import { Link } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { FiClock } from "react-icons/fi";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getId } from "../redux/detailsSlice";

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 1.5rem;
  place-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.div`
  border: 1px solid ${Colors.greyLight};
  border-radius: 5px;
  width: 280px;
  min-height: 500px;
  display: flex;
  flex-direction: column;

  a {
    color: ${Colors.black};
    text-decoration: none;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 5px;
  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    object-fit: cover;
  }
`;
const TextWrapper = styled.div`
  padding: 0.5rem;
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin-bottom: 0.5rem;
    word-break: break-word;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }
`;
const FoodInfo = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
`;

const PrepInfo = styled.div`
  ${FoodInfo}
  margin-bottom: 0.5rem;
`;

const DietInfo = styled.div`
  ${FoodInfo}
  margin-bottom: 0.5rem;
`;

const DishType = styled.div`
  h4 {
    margin-bottom: 0.5rem;
  }
  p {
    display: inline-block;
    border: 1px solid ${Colors.primary};
    padding: 1px 2px;
    margin-right: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
  }
`;

const IconsContainer = css`
  display: flex;
  align-items: center;
  height: 100%;

  p {
    margin-bottom: 0 !important;
    margin-right: 3px;
  }
  span {
    font-size: 0.9rem;
  }
`;

const Time = styled.span`
  flex-basis: 45%;
  ${IconsContainer}
`;
const Servings = styled.span`
  flex-basis: 45%;
  ${IconsContainer}
`;
const ClockIcon = styled(FiClock)`
  margin-right: 3px;
  color: ${Colors.primary};
`;
const PersonIcon = styled(GoPerson)`
  margin-right: 3px;
  fill: ${Colors.primary};
`;

const GlutenFree = styled.span`
  ${IconsContainer}
`;
const Vegan = styled.span`
  ${IconsContainer}
`;
const DairyFree = styled.span`
  ${IconsContainer}
`;

const NoIcon = styled(FaTimes)`
  color: ${Colors.grey};
`;
const YesIcon = styled(FaCheck)`
  color: ${Colors.primary};
`;

const DetailsBtn = styled(Link)`
  width: 100px;
  border: 1px solid ${Colors.primary};
  margin: 0.5rem auto;
  border-radius: 5px;
  padding: 0.5rem;
  transition: 0.3s all ease-in-out;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    /* border: none; */
    background: ${Colors.primary};
    color: ${Colors.white};
  }
`;

const DishCard = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Gallery>
      {data.recipes.map((item, index) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            onClick={(e) =>
              dispatch(getId({ retrievedId: e.currentTarget.id }))
            }
          >
            <ImageWrapper>
              <img src={item.image} alt="Recipe Picture" />
            </ImageWrapper>
            <TextWrapper>
              <h3>{item.title}</h3>
              <PrepInfo>
                <Time>
                  <ClockIcon />
                  <span>: {item.readyInMinutes} mins</span>
                </Time>
                <Servings>
                  <PersonIcon />
                  <span>: {item.servings}</span>
                </Servings>
              </PrepInfo>
              <DietInfo>
                <GlutenFree>
                  <p>Gluten-free: </p>
                  {item.glutenFree ? <YesIcon /> : <NoIcon />}
                </GlutenFree>
                <Vegan>
                  <p>Vegan: </p>
                  {item.vegan ? <YesIcon /> : <NoIcon />}
                </Vegan>
                <DairyFree>
                  <p>Dairy-free: </p>
                  {item.dairyFree ? <YesIcon /> : <NoIcon />}
                </DairyFree>
              </DietInfo>
              <DishType>
                <h4>Dish Type</h4>
                {item.dishTypes.map((type, index) => {
                  return <p key={index}>{type}</p>;
                })}
              </DishType>
              <DetailsBtn to="/RecipeDetails" rel="noopener noreferrer">
                View Recipe Details
              </DetailsBtn>
            </TextWrapper>
          </Card>
        );
      })}
    </Gallery>
  );
};

export default DishCard;
