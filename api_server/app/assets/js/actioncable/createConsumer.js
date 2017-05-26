//= require cable
//= require_self
//= require_tree ./actioncable

this.App = {};
App.cable = ActionCable.createConsumer();
