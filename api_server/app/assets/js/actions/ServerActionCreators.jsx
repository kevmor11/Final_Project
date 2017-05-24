const SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js');
const SmallConstants = require('../constants/SmallConstants.js');

const ActionTypes = SmallConstants.ActionTypes;

module.exports = {

  receiveLogin: function(json, errors) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },

};