var keyMirror = require('keymirror');

var APIRoot = "http://localhost:3000";

module.exports = {

  APIEndpoints: {
    LOGIN: APIRoot + "/login",
    REGISTRATION: APIRoot + "/users",
    ROOMS: APIRoot + "/rooms",
    POSTS: APIRoot + "/posts"
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    // Session
    LOGIN_REQUEST: null,
    LOGIN_RESPONSE: null,

    // Routes
    REDIRECT: null,
    LOAD_USERS: null,
    RECEIVE_USERS: null,
    LOAD_USER: null,
    RECEIVE_USER: null,
    LOAD_POSTS: null,
    RECEIVE_POSTS: null,
    LOAD_POST: null,
    RECEIVE_POST: null,
    LOAD_ROOMS: null,
    RECEIVE_ROOMS: null,
    LOAD_ROOM: null,
    RECEIVE_ROOM: null
  })

};