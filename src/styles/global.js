import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import "react-toastify/dist/ReactToastify.css";
import theme from "./theme";

const StyledApp = createGlobalStyle`
  @font-face{
      font-family: "proxima-nova";
      src: url(${require('../assets/fonts/ProximaNova-Regular.woff')});
      src: url(${require('../assets/fonts/ProximaNova-Regular.eot')}?#iefix) format("embedded-opentype"),
            url(${require('../assets/fonts/ProximaNova-Regular.woff')}) format("woff"),
            url(${require('../assets/fonts/ProximaNova-Regular.ttf')}) format("truetype"),
            url(${require('../assets/fonts/ProximaNova-Regular.svg')}#proxima-nova) format("svg");

      font-style: normal;
      font-weight: normal;
  }

  ${styledNormalize}
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: "proxima-nova", sans-serif;
    font-size: ${theme.fontSize.default};
    background-color: ${theme.color.primary};
    color: ${theme.color.white};
    max-width: 100vw;
    overflow-x: hidden;
  }

  .layout {
    display: block;
    min-height: calc(100vh - 320px);
    padding-top: 100px;
    max-width: 100vw;
    overflow-x: hidden;
  }

  .container {
    margin: auto;
    padding: 0 15px;
  }

  .page-index header a.index,
  .page-ranking header a.ranking {
    color: ${theme.color.primaryLight};

    &::after {
      width: 20px;
    }
  } 

  ul {
    list-style: none;
  }

  button {
    border: none;
    outline: 0;
  }
  hr {
    border-color: ${theme.color.primaryLight};
    margin: 40px 0;
  }

  a, input, button {
    transition: .2s all ease-in-out;
  }

  main p {
    font-size: ${theme.fontSize.medium};
    line-height: 1.5;
    margin: 0;
    text-align: center;
  }

  main p a {
    color: ${theme.color.primaryLight};
    text-decoration: none;
    font-weight: bold;
  }

  @media (max-width: 760px) {
    main p {
      font-size: 16px;
    }

    .ifdesktop {
      display: none !important;
    }
  }
`;

export default StyledApp;
