"use strict"

const React = require('react');

require("components/buttons/_button");

const Buttons = React.createClass({
  render: function () {
    return (
        <section className="buttons">
         // pattern
         <pre>
         <code>
            <button className="btn--modifier">Button Text</button>
         </code>
         </pre>

         <button className="btn--act">Act</button>
         <button className="btn--add"><i className="fa fa-plus-circle"></i> Add</button>
         <button className="btn--checkout">Checkout</button>
         <button className="btn--warn">Warn</button>
         <hr/>
         <button className="btn--modify">Modify</button>
         <button className="btn--reset">Reset</button>
         <button className="btn--cancel">Cancel</button>
         <hr/>
         <button className="btn--act is-disabled">is-disabled</button>
         <button className="btn--act is-successful">is-successful</button>
         <button className="btn--act is-failed">is-failed</button>
         <button className="btn--act is-waiting"><i className="fa fa-gear fa-spin"></i> is-waiting</button>
         <hr/>
         // Kill a panel or UI element
         <button className="btn--kill"><i className="fa fa-times"></i></button>

         // Up and Down content-wide
         <button className="btn--more-up"><i className="fa fa-chevron-up"></i></button>
         <button className="btn--more-down"><i className="fa fa-chevron-down"></i></button>
        </section>
      );
  }
});

module.exports = Buttons;
