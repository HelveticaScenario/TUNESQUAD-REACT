/**
 * @jsx React.DOM
 */

var React = require('React');

var GuardianPresentPrompt = React.createClass({

	render: function() {
		return (
			<div className="guardian">
				<img className="bird-bubble" src="imgs/birdwithbubble.png"/>
				<div className="guardian-btn-container">
					<img className="guardian-btn" src="imgs/NO.png"/>
					<img className="guardian-btn" style={{float: "right"}} src="imgs/YES.png"/>
				</div>
			</div>
		);
	}

});

module.exports = GuardianPresentPrompt;