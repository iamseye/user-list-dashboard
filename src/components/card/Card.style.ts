import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  padding: 1rem 2rem;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 0.4rem;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
