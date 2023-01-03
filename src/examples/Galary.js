import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const query = graphql`
  query {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;

  console.log(data);
  return (
    <Wrapper>
      {nodes.map((image, index) => {
        console.log(image);
        const { name } = image;
        const pathToImage = getImage(image);
        //   this remove second main jpeg image without the data inside.... but why is it appering here in the first place?
        if (!pathToImage) return null;
        return (
          <article key={index} className="item">
            <GatsbyImage
              image={pathToImage}
              alt={name}
              className="gallery-img"
            />
            <p>single image {name}</p>
            {/* <p>{image.childImageSharp.gatsbyImageData}</p> */}
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`;

export default Gallery;
