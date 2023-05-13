import React, { useState, FormEvent } from "react";

import { useUsers } from "../../hooks/useUsers";
import { Card } from "../card/Card.style";
import UserList from "../UserList.component";
import InputWithLabel from "../input/InputWithLabel.component";
import Button from "../button/Button.component";
import Spinner from "../Spinner";
import { UserPageContainer } from "./Page.style";

export default function UserPage() {
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);
  const [message, setMessage] = useState("");

  const { users, isLoading, error } = useUsers({ minAge, maxAge });

  if (error) {
    setMessage(error.message);
  }

  const onSubmitRetrieveUsers = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const minAge = formData.get("minAge");
    if (minAge) {
      setMinAge(Number(minAge));
    }
    const maxAge = formData.get("maxAge");

    if (maxAge) {
      setMaxAge(Number(maxAge));
    }
  };

  return (
    <UserPageContainer>
      <h2>Users</h2>
      <div className="user-content">
        <div className="age-filter">
          <Card className="filter-card">
            <form onSubmit={onSubmitRetrieveUsers}>
              <InputWithLabel
                preText="Min"
                name="minAge"
                defaultValue={0}
                type="number"
              />
              <InputWithLabel
                preText="Max"
                name="maxAge"
                min={1}
                defaultValue={100}
                type="number"
              />
              <Button type="submit">Retrieve Users </Button>
            </form>
          </Card>
          {!!message?.length && <p>{message}</p>}
        </div>

        <Card className="list-card">
          {isLoading && <Spinner />}
          {!!users?.length && <UserList users={users} />}
        </Card>
      </div>
    </UserPageContainer>
  );
}
