import * as React from "react";

interface IBgDiv {
  bgColor: String;
}

export const BgDiv: React.FC<IBgDiv> = props => (
  <div id="wrapper">{props.children}</div>
);
