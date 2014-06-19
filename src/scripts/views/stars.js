/**
 * @jsx React.DOM
 */

var React = require('react');
var _ = require('lodash');

var Stars = React.createClass({
	handleTap: function(star) {
		this.props.onTouchTap(star);
	},
	render: function() {
		var starsArr = [];
		for (var i = 0; i < (this.props.count || 0); i++) {
		 	starsArr.push((<span onTouchTap={_.partial(this.handleTap, i+1)}><img className="center" style={{width: "60%"}} src={i < this.props.rating? "imgs/redstar.png": "imgs/whitestar.png"} /></span>));
	 	}		
	 	return (
			React.DOM.div.apply(this,[{className: "flex-justify spacer"}].concat(starsArr))
		);
	}

});

module.exports = Stars;