import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components/macro";
import { Colors } from "../data/Variables";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

const Section = styled.section`
  margin-bottom: 2rem;
  h2 {
    margin-bottom: 1rem;
  }
`;

const ServingsandUnits = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;
const ServingsIncrementer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;

  p {
    margin-right: 1rem;
  }
`;

const buttons = css`
  margin-right: 1rem;
  fill: ${Colors.primary};
  font-size: 1.1rem;
  stroke: ${Colors.white};
  cursor: pointer;
`;
const Minus = styled(FiMinusCircle)`
  ${buttons}
`;
const Plus = styled(FiPlusCircle)`
  ${buttons}
`;
const Servings = styled.p``;

const CheckboxContainer = styled.div`
  input {
    &:after {
      width: 15px;
      height: 15px;
      top: -2px;
      left: -1px;
      position: relative;
      background-color: ${Colors.secondary};
      content: "";
      display: inline-block;
      visibility: visible;
      border: 1px solid ${Colors.grey};
      cursor: pointer;
    }

    &:checked:after {
      width: 15px;
      height: 15px;
      top: -2px;
      left: -1px;
      position: relative;
      background-color: ${Colors.primary};
      content: "";
      display: inline-block;
      visibility: visible;
      border: 1px solid ${Colors.grey};
      cursor: pointer;
    }
    margin-right: 10px;
  }
  label {
    margin-right: 15px;
  }
`;

const IngredientsQuantity = styled.div`
  display: grid;
  max-width: 700px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 610px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const SingleIngredient = styled.div`
  width: 130px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 480px) {
    width: 130px;
    height: 130px;
  }
`;
const Quantity = styled.p`
  word-break: break-all;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 700;
`;
const ImageWrapper = styled.div`
  width: 110px;
  height: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100px;
    max-height: 69px;
    object-fit: cover;
  }
`;
const IngredientName = styled.small`
  word-break: break-all;
  text-align: center;
`;

const IngredientsMeasurement = ({ recipe }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [copyRecipe, setCopyRecipe] = useState({});
  const duplicate = { ...copyRecipe };
  const imgURL = `https://spoonacular.com/cdn/ingredients_100x100/`;

  //clone the recipe object when ever it changes
  useEffect(() => {
    setCopyRecipe({ ...recipe });
  }, [recipe]);

  //switch between the 2 unit systems
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  //handle previous servings value
  const prevServings = useRef();
  useEffect(() => {
    prevServings.current = duplicate.servings;
  }, [duplicate.servings]);

  //handle calculation of servings and ingredient quantities
  const decrementHandle = () => {
    if (duplicate.servings > 1) {
      duplicate.servings = `${parseInt(duplicate.servings) - 1}`;

      //handle metric units
      duplicate.extendedIngredients.forEach((item) => {
        item.measures.metric.amount = (
          (item.measures.metric.amount / parseInt(prevServings.current)) *
          parseInt(duplicate.servings)
        ).toFixed(2);
      });
      //handle us units
      duplicate.extendedIngredients.forEach((item) => {
        item.measures.us.amount = (
          (item.measures.us.amount / parseInt(prevServings.current)) *
          parseInt(duplicate.servings)
        ).toFixed(2);
      });
    }

    setCopyRecipe(duplicate);
  };

  const incrementHandle = () => {
    duplicate.servings = `${parseInt(duplicate.servings) + 1}`;

    //handle metric units
    duplicate.extendedIngredients.forEach((item) => {
      item.measures.metric.amount = (
        (item.measures.metric.amount / parseInt(prevServings.current)) *
        parseInt(duplicate.servings)
      ).toFixed(2);
    });
    //handle us units
    duplicate.extendedIngredients.forEach((item) => {
      item.measures.us.amount = (
        (item.measures.us.amount / parseInt(prevServings.current)) *
        parseInt(duplicate.servings)
      ).toFixed(2);
    });

    setCopyRecipe(duplicate);
  };

  return (
    <Section>
      <h2>Ingredients</h2>
      <ServingsandUnits>
        <ServingsIncrementer>
          <p>Servings: </p>
          <Minus onClick={decrementHandle} />
          {copyRecipe && <Servings>{copyRecipe.servings}</Servings>}
          <Plus onClick={incrementHandle} />
        </ServingsIncrementer>
        <CheckboxContainer>
          <input
            type="checkbox"
            id="metric"
            name="unit"
            checked={isChecked}
            onChange={handleChange}
          />
          <label htmlFor="metric">Metric</label>
        </CheckboxContainer>
      </ServingsandUnits>

      {Object.entries(copyRecipe).length > 0 && (
        <IngredientsQuantity>
          {copyRecipe.extendedIngredients.map((item, index) => {
            return (
              <div key={index}>
                {" "}
                {isChecked ? (
                  <SingleIngredient>
                    <Quantity>
                      <span>{item.measures.metric.amount}</span>{" "}
                      {item.measures.metric.unitShort}
                    </Quantity>
                    <ImageWrapper>
                      <img src={`${imgURL}${item.image}`} alt="ingredient" />
                    </ImageWrapper>
                    <IngredientName>{item.name}</IngredientName>
                  </SingleIngredient>
                ) : (
                  <SingleIngredient>
                    <Quantity>
                      <span>{item.measures.us.amount}</span>{" "}
                      {item.measures.us.unitShort}
                    </Quantity>
                    <ImageWrapper>
                      <img src={`${imgURL}${item.image}`} alt="ingredient" />
                    </ImageWrapper>
                    <IngredientName>{item.name}</IngredientName>
                  </SingleIngredient>
                )}
              </div>
            );
          })}
        </IngredientsQuantity>
      )}
    </Section>
  );
};

export default IngredientsMeasurement;
