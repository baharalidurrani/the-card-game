import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface Props {
  wrapText?: boolean;
}
export function Details({ wrapText }: Props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Details</Typography>
        <br />
        <Typography noWrap={wrapText}>Bahar Ali</Typography>
        <br />
        <Typography noWrap={wrapText}>Bahar Ali dvdsvsdv sdvdsvdv</Typography>
        <br />
        <Typography noWrap={wrapText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Typography>
      </CardContent>
    </Card>
  );
}
