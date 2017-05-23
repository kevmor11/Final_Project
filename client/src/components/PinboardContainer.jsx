import React, {Component} from 'react'
import PinboardItems from './PinboardItems.jsx'

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
              <PinboardItems />
            </section>
          </article>
        </div>
      </div>
    )
  }
}