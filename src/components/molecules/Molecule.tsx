import React from "react";
import { Atom } from "../atoms";

interface Props {
  names: string[];
}
export function Molecule(props: Props) {
  return (
    <>
      {props.names.map((n, i) => (
        <Atom name={n} key={i} />
      ))}
    </>
  );
}
