/**
 * @jsx React.DOM
 */

var React = require('react');

var Header = React.createClass({

	render: function() {
		return (
			<div className="spacer">
				<span className="white-text big-text">{this.props.name.toUpperCase()}</span>
				<span className="blue-text small-text">	{this.props.instrument.toUpperCase()}</span>
			</div>
		);
	}

});

module.exports = Header;