import styled from "styled-components";

export const PageContainer = styled.div`
  vertical-align: middle;
  padding: 4rem;
  min-height: 80vh;
  display: flex;
  justify-content: space-evenly;
  background-color: #f5f5f5;
  width: 100%;
`;

export const UserPageContainer = styled.div`
  flex-direction: column;
  display: flex;
  width: 80%;

  .user-content {
    display: flex;
    flex-direction: row;
  }

  .age-filter {
    display: flex;
    flex-direction: column;
  }

  .list-card {
    width: 100%;
    margin-left: 3rem;
    align-items: start;
  }
  .filter-card {
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;
