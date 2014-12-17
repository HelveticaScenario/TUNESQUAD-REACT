/**
 * @jsx React.DOM
 */

var React = require('react');
var TodayCard = require('./todayCard');

var Home = React.createClass({

	render: function() {
		console.log(this.props);
		return (
			<div className="home">
				<img src="imgs/homeFull.png" className="amp"/>
				<div className="home-content-outer">
					<div className="home-content-inner">
				  		<TodayCard todayList={this.props.todayList}/>
			  		</div>
			  	</div>
			</div>
		);
	}

});

module.exports = Home;