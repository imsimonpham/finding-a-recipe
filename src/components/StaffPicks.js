import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../data/Variables";
import useFetch from "./useFetch";
import DishCard from "./DishCardCollection";
import MiniDishCard from "./MiniDishCardCollection";
import { apiKey } from "../data/apiKeyCollection";
import Pagination from "./Pagination";
import SyncLoader from "react-spinners/SyncLoader";
import { css } from "@emotion/react";
import { useSelector } from "react-redux";

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

const override = css`
  display: block;
  text-align: center;
  margin-bottom: 2rem;
`;

const StaffPicks = (props) => {
  const { id } = useSelector((state) => state.details);

  const info = {
    amountRandom: 6,
    amountInfo: 100,
    apiURL: "https://api.spoonacular.com/recipes/random",
    apiURL2: "https://api.spoonacular.com/recipes/findByIngredients",
    apiURL3: "https://api.spoonacular.com/recipes",
    apiKey: apiKey.two,
    ingredient: props.value,
  };

  // search by ingredients
  const {
    data: ingredientData,
    error: ingredientError,
    isLoading: ingredientIsLoading,
  } = useFetch(
    `${info.apiURL2}?apiKey=${info.apiKey}&ingredients=${info.ingredient}&number=${info.amountInfo}`
  );

  //random picks
  // const {
  //   data: randomData,
  //   error: randomError,
  //   isLoading: randomIsLoading,
  // } = useFetch(
  //   `${info.apiURL}?apiKey=${info.apiKey}&number=${info.amountRandom}`
  // );

  // pagination;
  const [copyData, setCopyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(12);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCopyData({ ...ingredientData });
  }, [ingredientData]);
  const recipes = Object.values(copyData);
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  //loader
  let [color, setColor] = useState(`${Colors.primary}`);

  return (
    <Section>
      <Container>
        <SearchResults>
          {props.value !== "" && (
            <>
              {ingredientIsLoading ? (
                <h1></h1>
              ) : (
                <h1>
                  We've found{" "}
                  <span
                    css={`
                      color: ${Colors.gold};
                      text-shadow: 1px 1px ${Colors.gold};
                    `}
                  >
                    {recipes.length}
                  </span>{" "}
                  recipes for you
                </h1>
              )}

              <GalleryWrapper>
                {ingredientError && <div>{ingredientError}</div>}
                {ingredientIsLoading && (
                  <SyncLoader size={15} color={color} css={override} />
                )}
                {Object.entries(copyData).length > 0 && (
                  <MiniDishCard data={currentRecipes} />
                )}
              </GalleryWrapper>
            </>
          )}
        </SearchResults>
        <Pagination
          recipesPerPage={recipesPerPage}
          totalRecipes={recipes.length}
          paginate={paginate}
          currentPage={currentPage}
        />

        <h1>6 Random Picks For You </h1>
        {/* <GalleryWrapper>
          {randomError && <div>{randomError}</div>}
          {randomIsLoading && <div>Loading...</div>}
          {randomData && <DishCard data={randomData} />}
        </GalleryWrapper> */}
      </Container>
    </Section>
  );
};

export default StaffPicks;
