import React from "react";
import styled, { css } from "styled-components/macro";
import { Colors } from "../data/Variables";
import useFetch from "./useFetch";
import DishCard from "./DishCardCollection";
import MiniDishCard from "./MiniDishCardCollection";

const Section = styled.section``;
const Container = styled.div`
  padding: 4rem 2rem;
  max-width: 1500px;
  margin: auto;

  @media screen and (max-width: 350px) {
    padding: 2rem 1rem;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 900;
    text-shadow: 1px 1px ${Colors.primary};
    margin-bottom: 2rem;
    text-transform: uppercase;
    text-align: center;
    color: ${Colors.primary};
  }
`;
const GalleryWrapper = styled.div``;
const SearchResults = styled.div``;

const StaffPicks = (props) => {
  // 34ac49879bd04719b7a984caaa4006b4
  // cab4f23fedc5483484839ad530349410
  //3caae40ae50049898c7b760b2fcddf72
  //55f312a137d04d81a13f1614a6ed3113
  const info = {
    amount: 6,
    apiURL: "https://api.spoonacular.com/recipes/random",
    apiURL2: "https://api.spoonacular.com/recipes/findByIngredients",
    apiURL3: "https://api.spoonacular.com/recipes",
    apiKey: "55f312a137d04d81a13f1614a6ed3113",
    ingredient: props.value,
  };

  const {
    data: ingredientData,
    error: ingredientError,
    isLoading: ingredientIsLoading,
  } = useFetch(
    `${info.apiURL2}?apiKey=${info.apiKey}&ingredients=${info.ingredient}`
  );

  const {
    data: randomData,
    error: randomError,
    isLoading: randomIsLoading,
  } = useFetch(`${info.apiURL}?apiKey=${info.apiKey}&number=${info.amount}`);

  return (
    <Section>
      <Container>
        <SearchResults>
          {props.value !== "" && (
            <>
              <h1>Your Search Results:</h1>
              <GalleryWrapper>
                {ingredientError && <div>{ingredientError}</div>}
                {ingredientIsLoading && <div>Loading...</div>}
                {ingredientData && <MiniDishCard data={ingredientData} />}
              </GalleryWrapper>
            </>
          )}
        </SearchResults>

        <h1>6 Random Picks For You </h1>
        <GalleryWrapper>
          {randomError && <div>{randomError}</div>}
          {randomIsLoading && <div>Loading...</div>}
          {randomData && <DishCard data={randomData} />}
        </GalleryWrapper>
      </Container>
    </Section>
  );
};

export default StaffPicks;
