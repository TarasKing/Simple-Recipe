import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`;

const FetchData = () => {
  //   const data = useStaticQuery(getData);
  //   console.log(data);
  // another way to grab data is destricturing
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData);

  return (
    <div>
      {/* <h2>{data.site.siteMetadata.person.name}</h2> */}
      <h2>The site title is "{title}"</h2>
    </div>
  );
};

export default FetchData;
