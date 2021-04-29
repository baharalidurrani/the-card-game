import React from "react";

interface Props {
  name: string;
}
export function Atom(props: Props) {
  return <h1>{props.name}</h1>;
}
