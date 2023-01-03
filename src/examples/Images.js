import React from "react";
import styled from "styled-components";

import { StaticImage } from "gatsby-plugin-image";

function Images() {
  return (
    <Wrapper>
      <article>
        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
        <h4>constrained / default</h4>
      </article>
      <article>
        <StaticImage
          src="../assets/images/recipes/recipe-2.jpeg"
          alt="food"
          placeholder="blurred"
          layout="fixed"
          width={200}
          className="example-img"
          as="div"
        />
        <h4>fixed</h4>
      </article>
      <article>
        <StaticImage
          src="../assets/images/recipes/recipe-3.jpeg"
          alt="food"
          placeholder="dominantColor"
          layout="fullWidth"
          className="example-img"
          as="article"
        />
        <h4>full width</h4>
      </article>
      <h2>Images</h2>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default Images;
