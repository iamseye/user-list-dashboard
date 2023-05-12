import React from "react";
import { getUsername, useUsers } from "../hooks/useUsers";
import styled from "styled-components";
import User from "./User";

export const UserPageContainer = styled.div`
  flex-direction: column;
  display: flex;

  .user-content {
    display: flex;
    flex-direction: row;
  }

  .age-filter {
    display: flex;
    flex-direction: column;
  }
`;

export default function UserPage() {
  const { users, isLoading, error } = useUsers();
  console.log(users);

  return (
    <UserPageContainer>
      <h2>Users</h2>
      <div className="user-content">
        <div className="age-filter">
          min: <input name="minAge" value="0" type="number" />
          max: <input name="maxAge" value="100" type="number" />
          <button type="button">Retrieve Users</button>
        </div>
        <div>
          {users?.map((user) => (
            <User key={user.email} name={getUsername(user)} age={user.age} />
          ))}
        </div>
      </div>
    </UserPageContainer>
  );
}
