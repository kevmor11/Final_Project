import React, { Component } from 'react';
export default function login(props) {
      return (
      <p className="control">
        <button className="button is-primary" onClick={props.clickHandler} >Login</button>
      </p>
      );
    }