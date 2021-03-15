import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2> this is a page component </h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
