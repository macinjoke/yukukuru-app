import { css, Global } from '@emotion/core';
import React from 'react';

const style = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --main: #333;
    --sub: #999;
    --back: #fff;
    --back-2: #eee;
    --shadow: rgba(0, 0, 0, 0.19);
    --back-shadow: rgba(255, 255, 255, 0.8);
    --primary: #2196f3;
    --primary-bg: #2196f322;
    --primary-gradient: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
    --yuku: #ffcdd2;
    --kuru: #bbdefb;
    --danger: #ef5350;
  }

  html[data-theme='dark'] {
    --main: #ccc;
    --sub: #999;
    --back: #111;
    --back-2: #222;
    --shadow: rgba(255, 255, 255, 0.4);
    --back-shadow: rgba(0, 0, 0, 0.8);
    --primary: #2196f3;
    --primary-bg: #2196f322;
    --primary-gradient: linear-gradient(120deg, #006d75 0%, #004099 100%);
    --yuku: #b71c1c;
    --kuru: #0d47a1;
    --danger: #e53935;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Yu Gothic', YuGothic, Verdana, Meiryo, 'M+ 1p',
      sans-serif;
    font-size: 1em;
  }

  html,
  body {
    background: var(--back);
    color: var(--main);
    height: 100%;
    width: 100%;
  }

  img,
  svg {
    display: block;
  }

  #__next {
    height: 100%;
  }
`;

export const GlobalStyle: React.FC = () => <Global styles={style} />;
