import React from "react";
import { UserType } from "../types/user.type";
import { getUsername } from "../hooks/useUsers";
import User from "./User.component";
import { ListItem } from "./list/ListItem.style";
import { ReactComponent as ArrowIcon } from "../assets/icon/sort-arrows.svg";

interface UserListProps {
  users: UserType[];
}
export default function UserList({ users }: UserListProps) {
  return (
    <>
      <ListItem>
        <div className="title" style={{ width: "60%" }}>
          <p>Name</p>
        </div>
        <div className="title">
          <p>Age</p>
        </div>
      </ListItem>
      {users?.map((user, index) => (
        <User
          key={user.email}
          name={getUsername(user)}
          age={user.age}
          lastItem={index === users.length - 1}
        />
      ))}
    </>
  );
}
