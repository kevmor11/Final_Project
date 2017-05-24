import React, {Component} from 'react';

export default
class PinboardItems extends Component {
  render(){
    return(
      <div>
        <div className="components-container">
            <div className="item fa fa-picture-o">
              <p>This is card 3</p>
            </div>
            <div className="item">
              <p>This is card 2</p>
            </div>
            <div className="item">
              <p>This is card 3</p>
            </div>
            <div className="item">
              <p>This is card 4</p>
            </div>
            <div className="item">
              <p>This is card 5</p>
            </div>
            <div className="item">
              <p>This is card 6</p>
            </div>
          </div>
      </div>
    )
  }
}