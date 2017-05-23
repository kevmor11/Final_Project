import React, {Component} from 'react';

export default
class PinboardSidebar extends Component {
  render(){
    return(
      <div>
        <div className="tile is-parent">
          <article className="tile is-child box mainboard-contents">
            <header className="hangout-pinboard">
              <div className="tabs is-centered">
              <ul>
                <li><a className="is-active">Pinboard</a></li>
                <li><a>Hangout</a></li>
              </ul>
              </div>
            </header>
            <section>
              <p className="title">Main column</p>
              <p className="subtitle">With some content</p>
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    )
  }
}