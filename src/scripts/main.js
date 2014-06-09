var React = require('React');
var Splash = require('./views/splash.js');
var Home = require('./views/home.js');
var GuardianPresentPrompt = require('./views/guardianPresentPrompt.js');

var App = React.createClass({

	render: function() {
		return (
			GuardianPresentPrompt()
		);
	}

});

React.renderComponent(App(), document.getElementById('app'))
module.exports = App;