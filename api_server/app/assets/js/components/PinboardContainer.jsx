import React, {Component} from 'react'
import PinboardItems from './PinboardItems.jsx'
import PinboardHeader from './PinboardHeader.jsx'

export default
class PinboardContainer extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = { openModal: '' };
  }


  openModal(modalName) {
    // image, link, note
    this.setState(Object.assign({}, this.state, { openModal: modalName }));
  }

  render(){
    return(
      <div>
        <div className="tile is-parent">
          <article className="tile is-child box mainboard-contents">
            <PinboardHeader modalToggle={this.openModal.bind(this)} />
            <section>
              <PinboardItems openModal={this.state.openModal} onClose={() => this.setState({openModal: ''})} roomID={this.props.roomID} />
            </section>
          </article>
        </div>
      </div>
    )
  }
}
