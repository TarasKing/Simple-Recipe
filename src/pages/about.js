import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  console.log(recipes);
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
              perspiciatis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              voluptates? Id omnis magnam deserunt enim, deleniti corrupti
              reiciendis veritatis voluptatem ipsum tempora modi tenetur
              perspiciatis quis non rem tempore corporis!
            </p>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="about"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Loot at those Awesome recipes</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default About;
