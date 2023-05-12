import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  display: flex;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Planned Test</h1>
    </HeaderContainer>
  );
}
