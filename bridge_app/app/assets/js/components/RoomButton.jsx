import React from 'react';
import PropTypes from 'prop-types';

const LoginButton = ({ clickHandler }) => (
  <p className="control">
    <button className="button hover create-room" onClick={clickHandler}> Create Room </button>
  </p>
);

LoginButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default LoginButton;

