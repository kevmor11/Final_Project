import React, {Component} from 'react';
import PinboardItems from './PinboardItems.jsx';
import PinboardHeader from './PinboardHeader.jsx';
import Hangout from './Hangout.jsx';

export default
class PinboardContainer extends Component {

  constructor(props) {
    super(props); // super calls `constructor` in React.Component
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

  openModal = (modalName) => {
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
                            modalToggle={this.openModal}
                            userData={this.state.user}
                            roomID={this.props.roomID} />
            <section>
              {this.state.onPinboard ? <PinboardItems
                                        posts={this.props.posts}
                                        roomAxiosData={this.props.roomAxiosData}
                                        userData={this.state.user}
                                        openModal={this.state.openModal}
                                        onClose={() => this.setState({openModal: ''})}
                                      /> : <Hangout roomName={this.props.roomName} roomID={this.props.roomID}/>}
            </section>
          </article>
        </div>
      </div>
    )
  }
}
