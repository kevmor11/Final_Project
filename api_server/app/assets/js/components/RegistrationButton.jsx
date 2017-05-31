import React from 'react';

export default function Registeration(props) {
  return (
    <p className="control">
      <button className="button is-danger landing" onClick={props.clickHandler}>Register</button>
    </p>
  );
}
