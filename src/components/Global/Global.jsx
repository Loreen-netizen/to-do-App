import React from "react";
import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box
}
body{
    overflow-x: hidden;
    overflow-y:scroll;
}
`

const Global = (props) => {
  const { children } = props;
  return <>
  <GlobalStyles/>
  {children}
  </>;
};
export default Global;
