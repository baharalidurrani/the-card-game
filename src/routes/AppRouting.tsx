import React from "react";
import { BrowserRouter } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}
/**
 * Protected/Public routes login can be added here.
 * @param props React.ReactNode
 * @returns jsx
 */
export function AppRouting(props: Props) {
  return <BrowserRouter>{props.children}</BrowserRouter>;
}
