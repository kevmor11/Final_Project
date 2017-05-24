import React, { PropTypes } from 'react';

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