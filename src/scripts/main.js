var React = require('react');
window.React = React;
React.initializeTouchEvents(true);
var Splash = require('./views/splash.js');
var Home = require('./views/home.js');
var Lesson = require('./views/lesson.js');
var StudentEval = require('./views/studentEval.js');
var OrderSupplies = require('./views/orderSupplies.js');
var GuardianPresentPrompt = require('./views/guardianPresentPrompt.js');
var Fluxxor = require('Fluxxor');
var EventPluginHub = require('react/lib/EventPluginHub');
var ResponderEventPlugin = require('./thirdparty/ResponderEventPlugin');
var TapEventPlugin = require('./thirdparty/TapEventPlugin');

EventPluginHub.injection.injectEventPluginsByName({
  ResponderEventPlugin: ResponderEventPlugin,
  TapEventPlugin: TapEventPlugin
});



var AppStore = Fluxxor.createStore({
  actions: {
    "TODAY_LIST_CLICK": "onTodayClick",
    "GUARDIAN_PROMPT_RESPONSE": "onGuardianResponse",
    "RESET": "onReset"
  },

  initialize: function() {
    this.path = "LESSON";
  },

  onTodayClick: function(payload) {
    this.path = "GUARDIAN";
    this.emit("change");
  },

  onGuardianResponse: function(payload) {
  	if(payload.present){
  		this.path = "LESSON";
  	} else{
			this.path = "HOME";
  	}
    this.emit("change");
  },

  onReset: function() {
  	this.path = "HOME";
  	this.emit('change');
  },

  getState: function() {
    return {
      path: this.path
    };
  }
});

var actions = {
  todayClick: function(student) {
    this.dispatch("TODAY_LIST_CLICK", {student: student});
  },

  guardianResponse: function(present) {
    this.dispatch("GUARDIAN_PROMPT_RESPONSE", {present: present});
  },

  reset: function() {
  	this.dispatch("RESET", {});
  }
};

var stores = {
  AppStore: new AppStore()
};

var flux = new Fluxxor.Flux(stores, actions);

var FluxMixin = Fluxxor.FluxMixin(React),
    FluxChildMixin = Fluxxor.FluxChildMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var App = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin("AppStore")],
 	getStateFromFlux: function() {
    var flux = this.getFlux();

    // Normally we'd use one key per store, but we only have one store, so
    // we'll use the state of the store as our entire state here.
    return flux.store("AppStore").getState();
  },
	render: function() {
		console.log(this.state);
		if(this.state.path === "GUARDIAN"){
			return GuardianPresentPrompt();
		} else if(this.state.path === "LESSON"){
      return Lesson();
    } else if(this.state.path === "STUDENT_EVAL"){
      return StudentEval();
    } else if(this.state.path === "ORDER_SUPPLIES"){
			return OrderSupplies();
		} else {
			return Home();
		}
		
	}

});

React.renderComponent(App({flux:flux}), document.getElementById('app'))
module.exports = App;