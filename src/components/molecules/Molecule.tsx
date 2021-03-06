import React from "react";
import Typography from "@material-ui/core/Typography";
import { INames } from "../../common/@types/app";
import { Atom } from "../atoms";

interface Optionals {
  title?: string;
}

type Props = INames & Optionals;

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
