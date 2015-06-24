/* jslint node: true */
// "use strict";

/** @jsx React.DOM */
var React = require('react');
require("../components/buttons/_button");
var Buttons = require("../components/buttons/Buttons.jsx");

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<h1>Testing area</h1>
				<Buttons />
			</div>
		);
	}

});

module.exports = App;
