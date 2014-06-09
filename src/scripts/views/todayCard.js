/**
 * @jsx React.DOM
 */

var React = require('React');

var TodayCard = React.createClass({

	render: function() {
		var listItems = this.props.todayData.map(function(e) {
			return (
				<div className="today-items-panel clearfix">
					<span className="today-list-item-name left">{e.name.toUpperCase()}</span>
					<span className="today-list-item-time right">{e.time.toUpperCase()}</span>
				</div>
				)
		});
		var todayList = React.DOM.div.apply(this,[{className: "today-list"}].concat(listItems));
		return (
			<div className="today-panel">
				<h1 className="">TODAY</h1>
				{todayList}
			</div>

			
		);
	}

});

module.exports = TodayCard;