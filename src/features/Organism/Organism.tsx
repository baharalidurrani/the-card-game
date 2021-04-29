import React from "react";
import { Molecule } from "../../components/molecules";

const names = ["Newton", "Einstein", "Nicola"];

export function Organism() {
  return <Molecule names={names} />;
}
