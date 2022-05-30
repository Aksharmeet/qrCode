import { useState, React } from "react";
import Svg from "./components/Svg/Svg";
import Input from "./components/Input/Input";
import { Grid } from "@material-ui/core";

import useStyle from "./style";
function App() {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");
  const classes = useStyle();
  return (
    <div className={classes.app}>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Input text={text} setText={setText} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Svg text={text} setQr={setQr} qr={qr} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
