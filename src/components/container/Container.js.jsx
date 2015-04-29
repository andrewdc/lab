/* jslint node: true */
"use strict";

const React = require("react");
require("components/container/_container");

const Docs = require("components/docs/Docs.js.jsx");

const Container = React.createClass({
  render: function () {
    return (
        <div className="container">
          <Docs />
        </div>
      );

  }
});

module.exports = Container;
