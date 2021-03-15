import React from "react";
import PropTypes from "prop-types";

export default function Page({ children }) {
  return (
    <div>
      <h2> this is a page component </h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};
