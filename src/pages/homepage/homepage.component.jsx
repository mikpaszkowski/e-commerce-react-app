import React from "react";
import styled from "styled-components";
import Directory from "../../components/directory";

const HomepageWrapperr = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
`;

const HomePage = () => (
  <HomepageWrapperr className="homepage">
    <Directory/>
  </HomepageWrapperr>
);

export default HomePage;
