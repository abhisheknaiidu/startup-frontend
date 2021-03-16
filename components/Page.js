import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px;
  }
  @font-face {
    font-family: 'Fira Code';
    font-weight: normal;
    font-style: normal;
  }
  body {
    font-family: 'Fira Code', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
  // for kinda weird reasons, the fonts applied to
  // global won't be working with buttons
  button {
    font-family: 'Fira Code', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;   
  }
`;

const InnerStyles = styled.div`
Inn
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <h2> this is a page component </h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
