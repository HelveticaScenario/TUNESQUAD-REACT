/**
 * @jsx React.DOM
 */

var React = require('react');
var Fluxxor = require('Fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);

var Lesson = React.createClass({
	mixins: [FluxChildMixin],
	render: function() {
		return (
			<div className="guardian" onTouchTap={this.getFlux().actions.reset}>Hello</div>
		);
	}

});

module.exports = Lesson;