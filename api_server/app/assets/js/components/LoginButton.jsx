import React from 'react';

export default function Login({clickHandler}) {
  return (
    <p className="control">
      <button className="button is-primary" onClick={clickHandler}>Login</button>
    </p>
  );
}
/*import PropTypes from 'prop-types';

const LoginButton = ({clickHandler}) => (
  <p className="control">
    <button className="button is-primary" onClick={clickHandler}>Login</button>
  </p>
);

LoginButton.propTypes = {
  clickHandler: PropTypes.func.isRequired
};

export default LoginButton;*/