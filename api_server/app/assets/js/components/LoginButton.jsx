import React from 'react';
import PropTypes from 'prop-types';

const LoginButton = ({clickHandler}) => (
  <p className="control">
    <button className="button is-primary" onClick={clickHandler}>Login</button>
  </p>
);

LoginButton.propTypes = {
  clickHandler: PropTypes.func.isRequired
};

export default LoginButton;

/*export default function login({clickHandler}) {
  return (
    <p className="control">
      <button className="button is-primary" onClick={clickHandler}>Login</button>
    </p>
  );
}*/