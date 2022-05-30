import React from "react";
import { Card } from "@material-ui/core";
import useStyle from "./style";
function Input({ text, setText }) {
  const classes = useStyle();

  return (
    <Card className={classes.inputBlock}>
      <input
        className={classes.input}
        type="text"
        value={text}
        name="text"
        onChange={(e) => setText(e.target.value)}
      ></input>
    </Card>
  );
}

export default Input;
