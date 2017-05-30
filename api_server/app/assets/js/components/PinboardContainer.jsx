import React, {Component} from 'react';
import PinboardItems from './PinboardItems.jsx';
import PinboardHeader from './PinboardHeader.jsx';
import Hangout from './Hangout.jsx';

export default
class PinboardContainer extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
    console.log("props at container ", props)
    this.state = {
      openModal: '',
      user: props.userData,
      roomAxiosData:props.roomAxiosData,
      onPinboard: true,
    };
  }

  handlePinboardClick = () => {
    this.setState({onPinboard: true});
  }

  handleHangoutClick = () => {
    this.setState({onPinboard: false});
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
            <PinboardHeader updatePinboardApp={this.props.updatePinboardApp} 
                            onPinboard={this.state.onPinboard} 
                            handlePinboardClick={this.handlePinboardClick} 
                            handleHangoutClick={this.handleHangoutClick} 
                            modalToggle={this.openModal.bind(this)} 
                            userData={this.state.user} 
                            roomID={this.props.roomID} />
            <section>
              {this.state.onPinboard ? 
                <PinboardItems posts={this.props.posts} 
                                roomAxiosData={this.props.roomAxiosData} 
                                userData={this.state.user} 
                                openModal={this.state.openModal} 
                                onClose={() => this.setState({openModal: ''})}/> : 
                  <Hangout roomName={this.props.roomName} roomID={this.props.roomID}/>}
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
