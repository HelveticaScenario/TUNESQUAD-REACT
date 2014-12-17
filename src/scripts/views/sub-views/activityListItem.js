/**
 * @jsx React.DOM
 */

var React = require('React');

var ActivityListItem = React.createClass({

	render: function() {
		return (
			<div>
				<div className="checked">
					<input type="checkbox" id={"item"+this.props.idx} />
					<label htmlFor={"piece"+this.props.idx} className="checked"></label>
				</div>
				<label htmlFor={"piece"+this.props.idx}  className="checkbox-label small-text" >{this.props.description.toUpperCase()}</label>
			</div>
		);
	}

});

module.exports = ActivityListItem;