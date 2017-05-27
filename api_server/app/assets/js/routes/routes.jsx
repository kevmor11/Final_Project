const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;

const index = require('../components/index.jsx');
const DashApp = require('../components/DashApp.jsx');
const Signup = require('../components/Signup.jsx');
const Login = require('../components/Login.jsx');
const UserPage = require('../components/User.jsx');
const RoomPage = require('../components/Room.jsx');
const RoomNew = require('../components/RoomNew.jsx');
const PostNew = require('../components/PostNew.jsx');


module.exports = (
  <Route name="index" path="/" component={index}>
    <DefaultRoute component={UserPage} />
    <Route name="user" path="users/:userId" component={DashApp}/>
    <Route name="room" path="/room/:roomId" component={RoomPage}/>
    <Route name="room" path="/room/:roomId" component={RoomPage}/>
    <Route name="new-room" path="/room/new" component={RoomNew}/> 
    <Route name="new-post" path="/post/new" component={PostNew}/>
  </Route>
);