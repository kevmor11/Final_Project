import React from 'react';

export default function Registeration(props) {
  return (
    <p className="control">
      <button className="button is-danger" onClick={props.clickHandler}>Registration</button>
    </p>
  );
}
