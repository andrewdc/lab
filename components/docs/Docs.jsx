"use strict"

var React = require('react');
var Buttons = require('buttons/Buttons.jsx');
require('docs/_docs');

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
