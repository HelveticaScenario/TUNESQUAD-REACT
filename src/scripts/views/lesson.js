/**
 * @jsx React.DOM
 */

var React = require('react');
var Fluxxor = require('Fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);

var Lesson = React.createClass({
	mixins: [FluxChildMixin],
	handleSubmit: function(e) {
		this.getFlux().actions.endLesson();
	},
	render: function() {
		console.log(this.props.workspace);
		
		return (
			<div className="brown-bg fullscreen-wrap padding">
				
				
				<div className="panel blue-bg half-padding">
					<div className="panel blue-bg white-border half-padding">
						<div className="text-center big-text white-text">NEXT LESSON</div>
						<input type="datetime-local" name="nextLesson" />
					</div>
				</div>
				<div className="panel red-bg half-padding">
					<div className="panel red-bg white-border half-padding">
						<div className="text-center big-text white-text">NEXT LESSON</div>
					</div>
				</div>
				<div className="panel red-bg half-padding" onTouchTap={this.handleSubmit}>
					<div className="panel red-bg white-border half-padding">
						<div className="text-center big-text white-text">SUBMIT</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Lesson;