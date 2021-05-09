import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { ICard } from "../../common/@types/app";

interface Props {
  data: ICard;
  wrapText?: boolean;
}
export function Details({ wrapText, data }: Props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Details</Typography>
        <br />
        <Typography noWrap={wrapText}>{data.realName}</Typography>
        <br />
        <Typography noWrap={wrapText}>{data.playerName}</Typography>
        <br />
        <Typography noWrap={wrapText}>{data.asset}</Typography>
      </CardContent>
    </Card>
  );
}
