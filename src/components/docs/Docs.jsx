"use strict"

var React = require('react');
var Buttons = require('components/buttons/Buttons.jsx');
require('components/docs/_docs');

var Docs = React.createClass({
  render: function () {
    return (
      <main>
        <Buttons />
      </main>
      );
  }
});

module.exports = Docs;
