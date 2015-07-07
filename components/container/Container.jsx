/* jslint node: true */
"use strict";

var React = require("react");
require("container/_container");

var Buttons = require("../buttons/Buttons.jsx");
var Forms = require("../forms/Forms.jsx");

var Container = React.createClass({
  render: function () {
    return (
        <div className="container">
          <Buttons />
          <Forms />
        </div>
      );

  }
});

module.exports = Container;
