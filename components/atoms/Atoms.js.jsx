/* jslint node: true */
"use strict";

const React = require('react');

require("components/atoms/_atoms");
var Buttons = require("components/buttons/Buttons.js.jsx");
var Forms = require("components/forms/Forms.js.jsx");

const Atoms = React.createClass({
  render: function () {
    return (
        <div className="atoms">
          <h2>Atoms Here</h2>
          <p>atoms are simple elements that cannot be broken down</p>
          <Buttons />
          <Forms />
        </div>
      );
  }
});

module.exports = Atoms;
