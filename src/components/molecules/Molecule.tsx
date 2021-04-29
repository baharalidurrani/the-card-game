import React from "react";
import Typography from "@material-ui/core/Typography";
import { Atom } from "../atoms";

interface Props {
  names: string[];
}
export function Molecule(props: Props) {
  return (
    <>
      <Typography variant="h3">Molecule</Typography>
      {props.names.map((n, i) => (
        <Atom name={n} key={i} />
      ))}
    </>
  );
}
