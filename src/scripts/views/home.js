/**
 * @jsx React.DOM
 */

var React = require('react');
var TodayCard = require('./todayCard');

var mockData = [
	{name:"lily", time: "7P"},
	{name:"george", time: "8P"}
]

var Home = React.createClass({
	render: function() {
		return (
			<div className="home">
				<img src="imgs/homeFull.png" className="amp"/>
				<div className="home-content-outer">
					<div className="home-content-inner">
				  		<TodayCard todayData={mockData}/>
				  		<TodayCard todayData={mockData}/>
				  		<TodayCard todayData={mockData}/>
				  		<TodayCard todayData={mockData}/>
			  		</div>
			  	</div>
			</div>
		);
	}

});

module.exports = Home;