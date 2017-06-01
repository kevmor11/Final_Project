import React from 'react';

export default function Login({clickHandler}) {
  return (
    <p className="control">
      <button className="button hover landing" onClick={clickHandler}>Login</button>
    </p>
  );
}
