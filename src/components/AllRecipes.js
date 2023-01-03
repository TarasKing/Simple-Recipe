import React from "react";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    allContentfulRecipe(sort: { title: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const data = useStaticQuery(query);
  //   console.log(data);

  const recipes = data.allContentfulRecipe.nodes;
  //   console.log(recipes);

  // ====================  Distructuring data another way ====================

  //   const {
  //     allContentfulRecipe: { nodes: recipes },
  //   } = useStaticQuery(query);
  //   console.log(recipes);

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
