import * as React from "react";
import * as styled from "@types/styled-components"; // yarn add @types/styled-components;

interface IBgDiv {
  bgColor: String;
}

export const BgDiv: React.FC<IBgDiv> = props => (
  <div id="wrapper">{props.children}</div>
);
