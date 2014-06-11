/**
 * @jsx React.DOM
 */

var React = require('react');
var Fluxxor = require('Fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);

var StudentEval = React.createClass({
	mixins: [FluxChildMixin],
	render: function() {
		return (
			<div className="brown-bg fullscreen-wrap padding">
				<div className="spacer">
					<span className="white-text big-text">STUDENT</span>
					<span className="blue-text small-text">INSTRUMENT</span>
				</div>
				<div className="lesson-panel">

				</div>
			</div>
		);
	}

});

module.exports = StudentEval;