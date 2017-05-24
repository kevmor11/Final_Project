const AppDispatcher = require('../dispatcher/AppDispatcher.js');
const Constants = require('../constants/Constants.js');
const WebAPIUtils = require('../utils/WebAPIUtils.js');

const ActionTypes = Constants.ActionTypes;

module.exports = {

  signup: function(email, password, passwordConfirmation) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.SIGNUP_REQUEST,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation
    });
    WebAPIUtils.signup(email, password, passwordConfirmation);
  },

  login: function(email, password) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.LOGIN_REQUEST,
      email: email,
      password: password
    });
    WebAPIUtils.login(email, password);
  },

  logout: function() {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.LOGOUT
    });
  }

};