/**
 * @jsx React.DOM
 */

var React = require('react');
var Fluxxor = require('Fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);

var OrderSupplies = React.createClass({
	mixins: [FluxChildMixin],
	render: function() {
		return (
			<div className="blue-bg fullscreen-wrap padding">
				<div className="spacer"><span className="white-text">ORDER SUPPLIES</span></div>
				<div className="lesson-panel"/>
			</div>
		);
	}

});

module.exports = OrderSupplies;