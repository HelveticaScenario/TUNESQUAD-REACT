/**
 * @jsx React.DOM
 */

var React = require('react');
var Fluxxor = require('Fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);
var _ = require('lodash');
var moment = require('moment');

var TodayCard = React.createClass({
	mixins: [FluxChildMixin],
	render: function() {
		console.log(this.props)
		var self = this;
		var listItems = this.props.todayList.map(function(e) {
			return (
				<div onTouchTap={_.partial(self.getFlux().actions.todayClick, e)} className="yellow-bg panel clearfix">
					<span className="big-text white-text">{e.studentName.toUpperCase()}</span>
					<span className="small-text red-text right">{moment(e.time).format('h:mm A')}</span>
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