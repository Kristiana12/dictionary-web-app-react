import { createGlobalStyle } from 'styled-components';

export const StyledGlobal = createGlobalStyle`
  @font-face {
    font-family: 'Incosolata';
    font-weight: 400;
    src: url('./fonts/inconsolata/static/Inconsolata-Regular.ttf')
      format('truetype');
  }

  @font-face {
    font-family: 'Incosolata';
    font-weight: 700;
    src: url('./fonts/inconsolata/static/Inconsolata-Bold.ttf')
      format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 400;
    src: url('./fonts/inter/static/Inter-Regular.ttf')
      format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 700;
    src: url('./fonts/inter/static/Inter-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Lora';
    font-weight: 400;
    src: url('./fonts/lora/static/Lora-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Lora';
    font-weight: 700;
    src: url('./fonts/lora/static/Lora-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Lora';
    font-weight: 700;
    font-style: italic;
    src: url('./fonts/lora/static/Lora-BoldItalic.ttf')
      format('truetype');
  }


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body {
    height: 100%;
    line-height: 1.5;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.3s;
    --clr-primary: #a445ed;
    --clr-white: #fff;
    --clr-text-secondary: #757575;
    --clr-error: #ff5252; 

    /* mobile */
    --fz-xs: 0.9375rem;
    --fz-s: 1rem;
    --fz-m: 1.125rem;
    --fz-l: 2rem;
    --fz-xl: 2.5rem;

    /* desktop */
    --fz-desk-xs: 1.125rem;
    --fz-desk-s: 1.25rem;
    --fz-desk-m: 1.125rem;
    --fz-desk-m2: 1.5rem;
    --fz-desk-l: 4rem;
    --fz-desk-xl: 2.5rem;
  }

  #light {
    --clr-background: #fff;
    --clr-background-options: #fff;

    //search input
    --clr-background-search: #f4f4f4;
    --clr-placeholder-search: #2d2d2d;
    //text
    --clr-text-primary: #2d2d2d;

    --clr-toggle-btn: #757575;
    --clr-line: #e9e9e9;
    --clr-box-shadow: rgba(0, 0, 0, 0.15);

  }

  #dark {
    --clr-background: #050505; 
    --clr-background-options: #2d2d2d;
    //search input
    --clr-background-search: #1f1f1f;
    --clr-placeholder-search: #fff;

    //text
    --clr-text-primary: #fff;


    --clr-toggle-btn: #a445ed;
    --clr-line: #3a3a3a;
    --clr-box-shadow: rgba(164, 69, 237, 0.7);
  }



  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }


  h1, p, label,input, span {
    color: var(--clr-text-primary)
  }

  input, button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }

  button:focus-visible {
    outline: 1px solid var(--clr-primary);
  }

  //fonts
  h1 {
    font-size: var(--fz-l);

    @media screen and (min-width: 678px){
    font-size: var(--fz-desk-l);
    }
  }

  h3 {
    color: var(--clr-text-secondary);
    font-weight: normal;
    font-size: var(--fz-s);

    @media screen and (min-width: 678px){
    font-size: var(--fz-desk-s);
    }
  }

  label, p, span, ul {
    font-size: var(--fz-s);

    @media screen and (min-width: 678px){
    font-size: var(--fz-desk-xs);
    }
  }


  //Utility CLasses
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    width: min(90%, 740px);
    margin: 0 auto;
  }

  .colorized {
    color: var(--clr-primary)
  }

  .bold {
    font-weight: bold;
  }

  .example {
    color: var(--clr-text-secondary);
    margin-top: 0.5rem;
  }

  .line {
      display: block;
      width: 100%;
      height: 1px;
      background-color: var(--clr-line);
  }

  .link {
      color: var(--clr-text-primary);
  }

  .underlined {
      text-decoration: underline;
  }

  .error-message {
    font-size: --fz-xs;
    color: var(--clr-error);
    margin-top: 0.4rem;
  }
`;
