/**
 * @jsx React.DOM
 */

var React = require('react');
var Fluxxor = require('Fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);

var TodayCard = React.createClass({
	mixins: [FluxChildMixin],

	render: function() {
		console.log(this.getFlux());
		var self = this;
		var listItems = this.props.todayData.map(function(e) {
			return (
				<div onTouchTap={self.getFlux().actions.todayClick} className="today-items-panel clearfix">
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