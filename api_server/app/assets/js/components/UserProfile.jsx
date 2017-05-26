import React, { Component } from 'react';


export default
class UserProfile extends Component {

  render() {
    return (
      <div className="tile is-parent is-2">
        <article className="tile is-child box dashboard profilebox">
          <p className="title">Hello {this.props.name}</p>
          <p className="subtitle">Welcome Back!</p>
          <figure className="image is-4by3">
            <img src={this.props.avatarURL}/>
          </figure>
          <a className="button is-primary">
            <span className="icon">
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
              </span>
            <span>Profile Setting</span>
          </a>
        </article>
      </div>
    )
  }
}  