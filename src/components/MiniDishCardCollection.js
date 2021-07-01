import React from "react";
import styled, { css } from "styled-components/macro";
import { Colors } from "../data/Variables";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getId } from "../redux/detailsSlice";

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 1.5rem;
  place-items: center;
  margin-bottom: 2rem;

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
const MiniCard = styled.div`
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
const IngredientsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    color: ${Colors.black};
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 5px;
    margin-right: 5px;
    display: inline-block;
    color: ${Colors.black};
    display: inline-block;
    padding: 5px;
    border: 1px solid ${Colors.primary};
    border-radius: 5px;
  }
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

const MiniDishCard = (props) => {
  const dispatch = useDispatch();

  return (
    <Gallery>
      {props.data.map((item, index) => {
        return (
          <MiniCard
            id={item.id}
            onClick={(e) =>
              dispatch(getId({ retrievedId: e.currentTarget.id }))
            }
            key={index}
          >
            <ImageWrapper>
              <img src={item.image} alt="Recipe Picture" />
            </ImageWrapper>
            <TextWrapper>
              <h3>{item.title}</h3>
              <IngredientsWrapper>
                {item.missedIngredients.map((ingredient, index) => {
                  return <p key={index}>{ingredient.name}</p>;
                })}
                {item.usedIngredients.map((ingredient, index) => {
                  return (
                    <b key={index}>
                      <p>{ingredient.name}</p>
                    </b>
                  );
                })}
              </IngredientsWrapper>
              <DetailsBtn to="/RecipeDetails" rel="noopener noreferrer">
                View Recipe Details
              </DetailsBtn>
            </TextWrapper>
          </MiniCard>
        );
      })}
    </Gallery>
  );
};

export default MiniDishCard;
