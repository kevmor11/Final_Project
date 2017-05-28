import React, {Component} from 'react'
import PinboardItems from './PinboardItems.jsx'
import PinboardHeader from './PinboardHeader.jsx'

export default
class PinboardContainer extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      openModal: '',
      user: props.userData
    };
  }


  openModal(modalName) {
    // image, link, note
    this.setState(Object.assign({}, this.state, { openModal: modalName }));
  }

  render(){
    console.log('pb console', this.state.user);

    return(
      <div>
        <div className="tile is-parent">
          <article className="tile is-child box mainboard-contents">
            <PinboardHeader modalToggle={this.openModal.bind(this)} userData={this.state.user}/>
            <section>
              <PinboardItems userData={this.state.user} openModal={this.state.openModal} onClose={() => this.setState({openModal: ''})}/>
              <section>
                <p className="title">Main column</p>
                <p className="subtitle">With some content</p>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>
              </section>

            </section>
          </article>
        </div>
      </div>
    )
  }
}
