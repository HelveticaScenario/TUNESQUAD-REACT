/**
 * @jsx React.DOM
 */

var React = require('react');
var Fluxxor = require('Fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);

var GuardianPresentPrompt = React.createClass({
	mixins: [FluxChildMixin],
	handleNo: function() {
		this.getFlux().actions.guardianResponse(false);
	},
	handleYes: function() {
		this.getFlux().actions.guardianResponse(true);
	},
	render: function() {
		return (
			<div className="fullscreen-wrap white-bg">
				<img className="bird-bubble" src="imgs/birdwithbubble.png"/>
				<div className="guardian-btn-container">
					<img onTouchTap={this.handleNo} className="guardian-btn" src="imgs/NO.png"/>
					<img onTouchTap={this.handleYes} className="guardian-btn" style={{float: "right"}} src="imgs/YES.png"/>
				</div>
			</div>
		);
	}

});

module.exports = GuardianPresentPrompt;