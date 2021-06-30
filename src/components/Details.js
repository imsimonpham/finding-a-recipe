import React from "react";
import styled, { css } from "styled-components/macro";
import { Colors } from "../data/Variables";
import dairy from "../images/logo/dairy.png";
import dairyfree from "../images/logo/dairyfree.png";
import vegan from "../images/logo/vegan.png";
import nonvegan from "../images/logo/nonvegan.png";
import gluten from "../images/logo/gluten.png";
import glutenfree from "../images/logo/glutenfree.png";
import like from "../images/logo/like.png";
import healthscore from "../images/logo/healthscore.png";
import chef from "../images/logo/chef.png";
import IngredientsMeasurement from "../components/IngredientsMeasurement";
import useFetch from "../components/useFetch";
import sanitizeHtml from "sanitize-html";
import { FiCheckCircle } from "react-icons/fi";
import { useSelector } from "react-redux";
import { apiKey } from "../data/apiKeyCollection";

const Section = styled.section``;

const Container = styled.div`
  padding: 4rem 2rem;
  max-width: 1500px;
  margin: auto;
  height: auto;
  @media screen and (max-width: 480px) {
    padding: 4rem 1rem;
  }
`;

const Title = styled.h1`
  margin: 5rem 0 0.5rem 0;
  font-size: 3rem;

  @media screen and (max-width: 480px) {
    margin-top: 6rem;
    font-size: 2rem;
  }
`;

const ExtraInfo = styled.div`
  margin-bottom: 1rem;
  height: 60px;
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
  p {
    font-weight: 900;
  }
  @media screen and (max-width: 480px) {
    img {
      width: 20px;
      height: 20px;
      margin: 0rem;
    }
  }
`;
const ExtraIconsContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-right: 2rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-right: 0.8rem;
    p {
      font-size: 0.8rem;
    }
  }
`;

const RecipelabScore = styled.div`
  ${ExtraIconsContainer}
`;
const HealthScore = styled.div`
  ${ExtraIconsContainer}
`;
const Likes = styled.div`
  ${ExtraIconsContainer}
`;

const ImgAndInfo = styled.div`
  height: 400px;
  display: flex;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 600px;
  margin-right: 3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

const FoodIconsContainer = css`
  width: 100%;
  height: 80px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    margin-right: 1rem;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 1rem;
    small {
      text-align: center;
    }
    img {
      margin: 0;
    }
  }
`;

const GlutenFree = styled.div`
  ${FoodIconsContainer}
`;
const DairyFree = styled.div`
  ${FoodIconsContainer}
`;
const Vegan = styled.div`
  ${FoodIconsContainer}
`;

const Summary = styled.div`
  h2 {
    margin-bottom: 0.5rem;
  }
`;

const Intro = styled.div`
  padding: 2rem 1rem;
  height: auto;
  width: 100%;
  background: ${Colors.secondary};
  line-height: 1.6;
  margin-bottom: 2rem;

  a {
    color: ${Colors.primary};

    &:hover {
      color: ${Colors.primaryLight};
    }
  }
`;

const Instructions = styled.div`
  h2 {
    margin-bottom: 0.5rem;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  h3 {
    color: ${Colors.primary};
  }
`;

const Check = styled(FiCheckCircle)`
  margin-right: 0.5rem;
  stroke: ${Colors.primary};
`;

const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
`;

const DetailedRecipe = (props) => {
  const { id } = useSelector((state) => state.details);

  const info = {
    apiURL: `https://api.spoonacular.com/recipes/${id}/information`,
    apiKey: apiKey.three,
    apiURL2: `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`,
  };

  const {
    data: recipe,
    error: recipeError,
    isLoading: recipeIsLoading,
  } = useFetch(`${info.apiURL}?apiKey=${info.apiKey}`);

  const {
    data: instruction,
    error: instructionError,
    isLoading: instructionIsLoading,
  } = useFetch(`${info.apiURL2}?apiKey=${info.apiKey}`);

  // sanitize raw html rendering
  // const dirty = recipe.summary;
  // const clean = sanitizeHtml(dirty, {s
  //   allowedTags: ["b", "i", "em", "strong", "a"],
  //   allowedAttributes: {
  //     a: ["href", "target"],
  //   },
  // });

  return (
    <Section>
      <Container>
        {recipeError && <div>{recipeError}</div>}
        {recipeIsLoading && <div>Loading...</div>}
        {recipe && (
          <>
            <Title>{recipe.title}</Title>
            <ExtraInfo>
              <HealthScore>
                <img src={healthscore} alt="" />
                <p>Health Score: {recipe.healthScore}</p>
              </HealthScore>
              <RecipelabScore>
                <img src={chef} alt="" />
                <p>Recipelab Score: {recipe.spoonacularScore}</p>
              </RecipelabScore>
              <Likes>
                <img src={like} alt="" />
                <p>Likes: {recipe.aggregateLikes}</p>
              </Likes>
            </ExtraInfo>
            <ImgAndInfo>
              <ImgContainer>
                <img src={recipe.image} alt="" />
              </ImgContainer>
              <InfoContainer>
                {recipe.glutenFree ? (
                  <GlutenFree>
                    <img src={glutenfree} alt="" />
                    <small>gluten-free</small>
                  </GlutenFree>
                ) : (
                  <GlutenFree>
                    <img src={gluten} alt="" />
                    <small>contains gluten</small>
                  </GlutenFree>
                )}
                {recipe.dairyFree ? (
                  <DairyFree>
                    <img src={dairyfree} alt="" />
                    <small>dairy-free</small>
                  </DairyFree>
                ) : (
                  <DairyFree>
                    <img src={dairy} alt="" />
                    <small>contains dairy products</small>
                  </DairyFree>
                )}

                {recipe.vegan ? (
                  <Vegan>
                    <img src={vegan} alt="" />
                    <small>vegan</small>
                  </Vegan>
                ) : (
                  <Vegan>
                    <img src={nonvegan} alt="" />
                    <small>non-vegan</small>
                  </Vegan>
                )}
              </InfoContainer>
            </ImgAndInfo>

            <Summary>
              <h2>Summary</h2>
              <Intro dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            </Summary>
          </>
        )}

        <IngredientsMeasurement recipe={recipe} />

        <Instructions>
          <h2>Instructions</h2>
          {instructionError && <div>{instructionError}</div>}
          {instructionIsLoading && <div>Loading...</div>}
          {instruction && (
            <>
              {instruction.length === 0 ? (
                <h4>Sorry, instruction is not available for this recipe!!!</h4>
              ) : (
                <>
                  {instruction[0].steps.map((step, index) => {
                    return (
                      <Step key={index}>
                        <StepWrapper>
                          <Check />
                          <h3>Step {step.number}</h3>
                        </StepWrapper>
                        <p>{step.step}</p>
                      </Step>
                    );
                  })}
                </>
              )}
            </>
          )}
        </Instructions>
      </Container>
    </Section>
  );
};

export default DetailedRecipe;
