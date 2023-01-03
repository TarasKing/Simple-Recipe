import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const About = () => {
  return (
    <Layout>
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
      </main>
    </Layout>
  );
};

export default About;
