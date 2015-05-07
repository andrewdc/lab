"use strict"

var React = require('react'),
  AceEditor = require('jsx!react-ace');

require('brace/mode/html');
require('brace/theme/monokai');

require("components/buttons/_button.scss");


var Section = React.createClass({
  getInitialState: function() {
    return {
      code: this.props.code
    }
  },
  render: function () {
    var code = this.state.code;
    var handleChange = function (code) {
      this.setState({code: code});
    }.bind(this);

    function onLoad(editor) {
      var session = editor.getSession();
      session.setUseWrapMode(true);
      editor.clearSelection();
    }

    return (<div className="example-block">
        <div className="example example_buttons">
          <AceEditor
              value={code}
              mode="html"
              theme="monokai"
              height=" "
              width=" "
              showPrintMargin={false}
              showGutter={false}
              onLoad={onLoad}
              onChange={handleChange} />
        </div>
        <div className="docs-panel">
          <h3>Standard Button Styles</h3>
          <p>Primary user actions. Note that Font Awesome icons can be added to buttons when appropriate.</p>
          <div dangerouslySetInnerHTML={{__html: code}}></div>
        </div>
      </div>);
  }
});


var Buttons = React.createClass({
  getInitialState: function() {
    return {
      standardButtons: require('raw!./standard-buttons.html')
    };
  },
  render: function () {
    var standardButtons = this.state.standardButtons;
    return (
        <section className="docs-block buttons" id="buttons">
        <h2>Buttons</h2>

          <Section code={standardButtons} />
          <div className="docs-panel">
            <h3>Minimal Button Styles</h3>
            <p>Used for secondary user paths and actions.</p>

          </div>
          <div className="docs-panel">
            <h3>Angular-controlled Button States</h3>
            <p>These classNamees can be added and removed with js for a responsive and informative user experience.</p>
            <button className="btn--act is-disabled">is-disabled</button>
            <button className="btn--act is-successful">is-successful</button>
            <button className="btn--act is-failed">is-failed</button>
            <button className="btn--act is-waiting"><i className="fa fa-gear fa-spin"></i> is-waiting</button>
          </div>
          <div className="docs-panel">
            <h3>Special Case Buttons</h3>
            <p>Where a panel or UI element requires a simple close action (see top right). Typically should cancel whatever action generated the panel.</p>
            <button className="btn--kill">Kill <i className="fa fa-times"></i></button>
            <hr/>
            <p>Up and down (or 'load more') buttons span the width of the container they are in and can be used in modals or embedded on "regular" pages.</p>
            <button className="btn--more-up"><i className="fa fa-chevron-up"></i>
            </button>
            <p className="item">[Content here]</p>
            <button className="btn--more-down"><i className="fa fa-chevron-down"></i></button>
            &nbsp;
            <button className="btn--more-down"><span className="important">Load More</span></button>
          </div>
        </section>
      );
  }
});

module.exports = Buttons;
