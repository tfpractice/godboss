import blueGrey from "material-ui/colors/blueGrey";
import common from "material-ui/colors/common";
import grey from "material-ui/colors/grey";
import { createMuiTheme } from "material-ui/styles";

const white = common.white;

const primary = blueGrey;

const accent = white;

const secondary = grey;

const type = `dark`;

const text = { primary: `#ddd`, secondary: `#ddd` };

const palette = {
  primary,
  secondary,
  accent,
  type,
  text,
};

const cardBack = `rgba(48,48,48,0.8)`;

const theme = createMuiTheme({ palette, cardBack });

export default theme;
