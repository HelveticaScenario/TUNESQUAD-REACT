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

var moment = require('moment');

EventPluginHub.injection.injectEventPluginsByName({
  ResponderEventPlugin: ResponderEventPlugin,
  TapEventPlugin: TapEventPlugin
});

var MockData = [
  {
    studentName: 'billy',
    instrument: 'trumpet',
    time: moment().add('hours', 1).toDate(),
    pieces: ['Piece 1', 'Piece 2']
  },
  {
    studentName: 'judy',
    instrument: 'guitar',
    time: moment().add('hours', 3).toDate(),
    pieces: ['Piece 1', 'Piece 2']
  },
  {
    studentName: 'george',
    instrument: 'drums',
    time: moment().add('hours', 2).toDate(),
    pieces: ['Piece 1', 'Piece 2']
  }
];

var AppStore = Fluxxor.createStore({
  actions: {
    'TODAY_LIST_CLICK': 'onTodayClick',
    'GUARDIAN_PROMPT_RESPONSE': 'onGuardianResponse',
    'RESET': 'onReset',
    'STUDENT_EVAL': 'onLessonCompletion'
  },

  initialize: function() {
    this.data = MockData.sort(function(a, b) {
      return a.time - b.time;
    });

    this.path = 'SPLASH';
    // this.path = 'STUDENT_EVAL';
  },

  onTodayClick: function(payload) {
    this.selectedHolding = payload;

    this.selectedWorkspace = {
      name: payload.studentName,
      instrument: payload.instrument,
      pieces: payload.pieces.slice(0)
    };
    this.path = 'GUARDIAN';
    this.emit('change');
  },

  onGuardianResponse: function(payload) {
    if (payload.present) {
      this.selectedWorkspace = {
        name: this.selectedHolding.studentName,
        instrument: this.selectedHolding.instrument,
        pieces: this.selectedHolding.pieces.slice(0),
        startTime: new Date()
      };
      this.path = 'LESSON';
    } else {
      delete this.selectedHolding;
      this.path = 'HOME';
    }
    this.emit('change');
  },

  onLessonCompletion: function(payload) {
    this.path = 'STUDENT_EVAL';
    this.emit('change');
  },

  onReset: function() {
    delete this.selectedHolding;
    delete this.selectedWorkspace;
    this.path = 'HOME';
    this.emit('change');
  },

  getState: function() {
    return {
      path: this.path,
      data: this.data,
      workspace: this.selectedWorkspace
    };
  }
});

var actions = {
  todayClick: function(todayItem) {
    this.dispatch('TODAY_LIST_CLICK', todayItem);
  },

  guardianResponse: function(present) {
    this.dispatch('GUARDIAN_PROMPT_RESPONSE', {present: present});
  },

  endLesson: function(lesson) {
    this.dispatch('STUDENT_EVAL', lesson);
  },

  reset: function() {
    this.dispatch('RESET', {});
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
  mixins: [FluxMixin, StoreWatchMixin('AppStore')],
  getStateFromFlux: function() {
    var flux = this.getFlux();

    // Normally we'd use one key per store, but we only have one store, so
    // we'll use the state of the store as our entire state here.
    return flux.store('AppStore').getState();
  },
  render: function() {
    console.log(this.state);
    if (this.state.path === 'GUARDIAN') {
      return GuardianPresentPrompt();
    } else if (this.state.path === 'LESSON') {
      return Lesson({workspace: this.state.workspace});
    } else if (this.state.path === 'STUDENT_EVAL') {
      return StudentEval({workspace: this.state.workspace});
    } else if (this.state.path === 'ORDER_SUPPLIES') {
      return OrderSupplies({workspace: this.state.workspace});
    } else if (this.state.path === 'SPLASH') {
      return Splash();
    } else {
      return Home({todayList: this.state.data});
    }
  }

});

React.renderComponent(App({flux:flux}), document.getElementById('app'))
module.exports = App;
