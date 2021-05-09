import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { ICard } from "../../common/@types/app";

interface Props {
  data: ICard;
  wrapText?: boolean;
  selected?: ICard;
  changeSelect?: (data: ICard) => void;
}
export function Details({ wrapText, data, selected, changeSelect }: Props) {
  return (
    <Card
      raised={Boolean(selected?.id === data.id)}
      onClick={() => {
        changeSelect && changeSelect(data);
      }}
    >
      <CardContent>
        {!wrapText && <Typography variant="h4">Details</Typography>}
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
