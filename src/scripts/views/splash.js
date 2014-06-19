/**
 * @jsx React.DOM
 */

var React = require('react');
var Fluxxor = require('Fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);

var Splash = React.createClass({
	mixins: [FluxChildMixin],
	componentDidMount: function() {
    this.timeOut = setTimeout((function() {
    	this.getFlux().actions.reset();
    }).bind(this), 1000); // Call a method on the mixin
  },
	render: function() {

		return (
				<div className="fullscreen-wrap white-bg">
					<img src="imgs/KINGlogo.png" />
				</div>
		);
	}

});

module.exports = Splash;