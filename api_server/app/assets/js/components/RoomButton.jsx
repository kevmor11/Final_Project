import React from 'react';
import PropTypes from 'prop-types';

const LoginButton = ({clickHandler}) => (
  <p className="control">
    <button className="button is-primary create-room" onClick={clickHandler}> Creat Room </button>
  </p>
);

LoginButton.propTypes = {
  clickHandler: PropTypes.func.isRequired
};

export default LoginButton;

