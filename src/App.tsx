import React from "react";
import styled from "styled-components";
import Header from "./components/header/Header.component";
import UserPage from "./components/page/UserPage.component";
import { PageContainer } from "./components/page/Page.style";

const AppContainer = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  align-items: center;
  flex-direction: column;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <PageContainer>
        <UserPage />
      </PageContainer>
    </AppContainer>
  );
}

export default App;
