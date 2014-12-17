/**
 * @jsx React.DOM
 */

var React = require('React');

var ActivitiesList = React.createClass({

	render: function() {
		var pieces = this.props.workspace.pieces.map(function(e, idx) {
			return (
				
				)
		})
		return (
			<div className="panel yellow-bg half-padding">
				<div className="panel yellow-bg white-border half-padding">
					<div className="text-center big-text white-text spacer">ASSIGNMENT</div>
					{React.DOM.div({},pieces)}
				</div>
			</div>
		);
	}

});

module.exports = ActivitiesList;