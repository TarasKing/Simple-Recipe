import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Hashtag meditation scenester hexagon tumblr post-ironic.
              Succulents butcher kombucha, tumblr four loko forage dreamcatcher
              chillwave kitsch cloud bread same.
            </p>
            <p>
              Aesthetic church-key activated charcoal portland tofu disrupt.
              PBR&B beard cornhole four loko taxidermy, sartorial jean shorts
              slow-carb af cold-pressed try-hard kinfolk.
            </p>
            <p>
              {" "}
              Kickstarter readymade locavore, snackwave 8-bit tilde godard.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message"></label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
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

export default Contact;
