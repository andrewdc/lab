/* jslint node: true */
"use strict";

var React = require("react");
require("container/_container");

var Buttons = require("../buttons/Buttons.jsx");

var Container = React.createClass({
  render: function () {
    return (
        <div className="container">
          <Buttons />
        </div>
      );

  }
});

module.exports = Container;
