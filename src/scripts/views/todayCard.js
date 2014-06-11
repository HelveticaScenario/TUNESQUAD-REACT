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
				<div onTouchTap={self.getFlux().actions.todayClick} className="yellow-bg panel clearfix">
					<span className="big-text white-text">{e.name.toUpperCase()}</span>
					<span className="small-text red-text right">{e.time.toUpperCase()}</span>
				</div>
				)
		});
		var todayList = React.DOM.div.apply(this,[{className: "today-list"}].concat(listItems));
		return (
			<div className="panel red-bg">
				<div className="white-text big-text spacer">TODAY</div>
				{todayList}
			</div>

			
		);
	}

});

module.exports = TodayCard;