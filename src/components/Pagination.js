import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { Colors } from "../data/Variables";

const PageNumList = styled.div`
  list-style-type: none;
  margin: 3rem 0rem;
  text-align: center;
  a {
    text-decoration: none;
    color: ${Colors.black};
  }
`;
const PageNum = styled.span`
  display: inline-block;
  cursor: pointer;
  padding: 8px 16px;
  display: inline-block;
  transition: background-color 0.3s;
  font-weight: 900;
  border: 1px dashed grey;
  border-radius: 5px;
  &:hover {
    background: ${Colors.primaryLight};
  }

  &.active {
    background: ${Colors.secondary};
  }
`;

const Pagination = ({
  recipesPerPage,
  totalRecipes,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <PageNumList>
        {/* <a href="!#">&laquo;</a> */}
        {pageNumbers.map((number) => (
          <PageNum
            key={number}
            onClick={() => paginate(number)}
            className={currentPage == number ? "active" : null}
          >
            {number}
          </PageNum>
        ))}
        {/* <a href="!#">&raquo;</a> */}
      </PageNumList>
    </>
  );
};

export default Pagination;
