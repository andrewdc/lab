/* jslint node: true */
// "use strict";

/** @jsx React.DOM */
var React = require('react');
require("../testing/_app");
var Container = require("../components/container/Container.jsx");

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<h1>Testing area</h1>
				<Container />
			</div>
		);
	}

});

module.exports = App;
