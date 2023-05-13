import styled from "styled-components";

interface ListItemProps {
  removeBorderBottom?: boolean;
}

export const ListItem = styled.div<ListItemProps>`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: ${(props) =>
    props.removeBorderBottom ? "none" : "1px solid lightgrey"};
  justify-content: flex-start;
  padding: 1rem 2rem;
  box-sizing: border-box;

  .last-item {
    border-bottom: none;
  }

  .title {
    font-weight: bold;
  }
`;
