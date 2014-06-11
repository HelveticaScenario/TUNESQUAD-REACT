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
			<div className="brown-bg fullscreen-wrap padding">
				<div className="spacer">
					<span className="white-text big-text">STUDENT</span>
					<span className="blue-text small-text">INSTRUMENT</span>
				</div>
				<div className="panel yellow-bg half-padding">
					<div className="panel yellow-bg white-border half-padding">
						<div className="text-center big-text white-text spacer">ASSIGNMENT</div>
						<div>
							<input type="checkbox"/>
							<label>PIECE 1</label>
						</div>
					</div>
				</div>
				<div className="panel blue-bg half-padding">
					<div className="panel blue-bg white-border half-padding">
						<div className="text-center big-text white-text">NEXT LESSON</div>
					</div>
				</div>
				<div className="panel red-bg half-padding">
					<div className="panel red-bg white-border half-padding">
						<div className="text-center big-text white-text">NEXT LESSON</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Lesson;