/* jslint node: true */
// "use strict";
require("./base/_base.scss");
require("./core/_core.scss");

/** @jsx React.DOM */
var React = require('react');
var App = require('./src/app.jsx');
React.render(<App />, document.getElementById('main'));
