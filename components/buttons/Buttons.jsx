/* jslint node: true */
// "use strict";

/** @jsx React.DOM */

var React = require('react');
require("buttons/_button.scss");

var Buttons = React.createClass({
  render: function() {
    return (
      <div className="buttons">
        <button className="btn--act">Act</button>
        <button className="btn--add"><i className="fa fa-plus-circle"></i> Add</button>
        <button className="btn--checkout">Checkout</button>
        <button className="btn--warn">Warn</button>
        <button className="btn--modify">Modify</button>
        <button className="btn--reset">Reset</button>
        <button className="btn--cancel">Cancel</button>
        <button className="btn--act is-disabled">is-disabled</button>
        <button className="btn--act is-successful">is-successful</button>
        <button className="btn--act is-failed">is-failed</button>
        <button className="btn--act is-waiting"><i className="fa fa-gear fa-spin"></i> is-waiting</button>
      </div>
    );
  },
});

module.exports = Buttons;
