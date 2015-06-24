/* jslint node: true */
// "use strict";

/** @jsx React.DOM */
var React = require('react');
require("./components/buttons/_button");

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<h1>Hello world!</h1>
				<button className="btn--act">Act Now</button>
			</div>
		);
	}

});

module.exports = App;
