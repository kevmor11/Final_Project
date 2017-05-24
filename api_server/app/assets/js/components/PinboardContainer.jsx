import React, {Component} from 'react'
import PinboardItems from './PinboardItems.jsx'
import PinboardHeader from './PinboardHeader.jsx'

export default
class PinboardSidebar extends Component {
  render(){
    return(
      <div>
        <div className="tile is-parent">
          <article className="tile is-child box mainboard-contents">
            <PinboardHeader />
            <section>
              <PinboardItems />
            </section>
          </article>
        </div>
      </div>
    )
  }
}