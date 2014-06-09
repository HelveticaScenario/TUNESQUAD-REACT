var React = require('React');
// Link = require('react-router-component').Link;

var Splash = React.createClass({
	componentDidMount: function() {
    this.timeOut = setTimeout((function() {
    	
    }), 1000); // Call a method on the mixin
  },
	render: function() {

		return (
				React.DOM.img({className:"splash", src:"imgs/KINGlogo.png"})
		);
	}

});

module.exports = Splash;