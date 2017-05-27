import React, {Component} from 'react';

export default
class PinboardSidebar extends Component {
  render(){
    return(
      <div>
        {/*TODO Display all the users from the userrooms table that match the current_room ID which we should pass in to Sidebar
        as a prop from the other component that determines the current_room state */}
        <div className="tile is-parent is-2 rooms">
          <article className="tile is-child box">
            <div className="content">

              <p className="subtitle">Your Rooms</p>
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <i className="fa fa-hashtag" aria-hidden="true"></i>
                    </th>
                    <th>Room Name</th>
                  </tr>
                </thead>
                <tfoot>
                </tfoot>
                <tbody>

                  <tr>
                    <th>1</th>
                    <td><a href="" title="this room blah blah blah">Secret Garden</a></td>
                  </tr>

                  <tr>
                    <th>2</th>
                    <td><a href="this room blah blah blah" >Hanging Gardens</a></td>
                  </tr>

                </tbody>
              </table>
            </div>
          </article>
        </div>
      </div>
    )
  }
}
