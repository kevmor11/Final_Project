import React, {Component} from 'react';
// import {Card, CardTitle, CardPanel} from 'react-materialize'
import {Modal, Button, OverlayTrigger} from 'react-bootstrap'

export default
class PinItemModalImage extends Component {

constructor(props) {
    super(props); // super calls `constructor` in React.Component
    this.state = {
      showModal: false,
      user: null,
      postID: null,
    }
  }

  open = () => {
      this.setState({
        showModal: true,
        postID: this.props.postID,
      });
  }

  close = () => {
    this.setState({ showModal: false });
  }

  render() {
    return(
      <div>
        <div className="item-container onClick={this.open}">
          <h4><b className="item">{this.props.title}</b></h4> 
          <img src={'http://localhost:3000/' + this.props.thumb} alt="Avatar"/>
        </div>
        {/*<div className="item-container" onClick={this.open}>
          <p className="item img-title">{this.props.title}</p>
          <i className="item add fa fa-picture-o"></i>
          <p className="item">{this.props.name}</p>
          <img className="item img-thumb" src={'http://localhost:3000/' + this.props.thumb}/>*/}
        {/*</div>*/}

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={'http://localhost:3000/' + this.props.img}/>
            <p>{this.props.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <p>By: {this.props.name}</p>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
