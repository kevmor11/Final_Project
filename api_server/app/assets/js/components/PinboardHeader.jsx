import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default
class PinboardHeader extends Component {
  static propTypes = {
    modalToggle: PropTypes.func.isRequired,
  }

  constructor(props){
    super(props);
    this.state = {showAddButtons:false};
  }

  handleClick = () => {
    this.setState({showAddButtons: !this.state.showAddButtons})
  }
  render(){
    let containerClass = "add-content-container";
    if(this.state.showAddButtons) containerClass += " open";

    return(
      <div>
        <header className="hangout-pinboard">
          <div className={containerClass}>
            <div className="add-content photo" onClick={() => this.props.modalToggle('image')}><i className="add fa fa-picture-o"></i></div>
            <div className="add-content message" onClick={() => this.props.modalToggle('link')}><i className="add fa fa-link"></i></div>
            <div className="add-content note"  onClick={() => this.props.modalToggle('note')}><i className="add fa fa-sticky-note-o"></i></div>
            <div className="add-content add-button" onClick={this.handleClick}><i className="fa fa-plus"></i></div>
          </div>
          <div className="tabs is-centered">
            <ul>
              <li><a className="is-active">Pinboard</a></li>
              <li><a>Hangout</a></li>
            </ul>
          </div>
        </header>
      </div>
    )
  }
}