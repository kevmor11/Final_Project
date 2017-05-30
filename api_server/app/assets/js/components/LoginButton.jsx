import React from 'react';

export default function Login({clickHandler}) {
  return (
    <p className="control">
      <button className="button is-primary" onClick={clickHandler}>Login</button>
    </p>
  );
}
