import React, { useEffect } from "react";
import InlineSVG from "svg-inline-react";
import axios from "axios";
import { request } from "../../api/controller";
import useStyle from "./style";
import { Card } from "@material-ui/core";
function Svg({ text, setQr, qr }) {
  useEffect(() => {
    axios
      .request(request(text))
      .then((res) => setQr(res.data))
      .catch((err) => console.log(err));
  }, [text]);

  const classes = useStyle();
  return (
    <Card className={classes.SvgContainer}>
      <InlineSVG src={qr} />
    </Card>
  );
}

export default Svg;
