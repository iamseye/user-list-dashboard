import React from "react";

interface UserProps {
  name: string;
  age: number;
}
export default function User({ name, age }: UserProps) {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
}
