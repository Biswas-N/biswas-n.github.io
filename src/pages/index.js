import * as React from "react";

import { StyledText } from "../elements"
import Seo from "../components/Seo";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// markup
const IndexPage = () => {
  return (
    <>
      <Seo />
      <main style={pageStyles}>
        <title>Home Page</title>
          <p>The normal text</p>
        <StyledText>The styled text</StyledText>
      </main>
    </>
  );
};

export default IndexPage;
