"use strict"

var React = require('react');
var Buttons = require('components/buttons/Buttons.jsx');
require('components/docs/_docs');

var Docs = React.createClass({
  render: function () {
    return (
      <div className="wrapper">
        <main>
          <Buttons />
        </main>
        </div>
      );
  }
});

module.exports = Docs;
