import React from "react";
import { ListItem } from "./list/ListItem.style";

interface UserProps {
  name: string;
  age: number;
  lastItem?: boolean;
}
export default function User({ name, age, lastItem = false }: UserProps) {
  return (
    <ListItem removeBorderBottom={lastItem}>
      <div style={{ width: "60%" }}>{name}</div>
      <div>{age}</div>
    </ListItem>
  );
}
