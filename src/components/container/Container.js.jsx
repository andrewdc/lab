/* jslint node: true */
"use strict";

const React = require("react");
require("components/container/_container");

const Atoms = require("components/atoms/Atoms.js.jsx");

const Container = React.createClass({
  render: function () {
    return (
        <div className="container">
          <Atoms />
        </div>
      );

  }
});

module.exports = Container;
