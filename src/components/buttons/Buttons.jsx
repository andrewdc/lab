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
  handleChange: function (code) {
    this.setState({code: code});
  },
  render: function () {

    return (
      <div className="example-block">
        <div className="example-code example_buttons">
          <AceEditor
              name={this.props.name}
              value={this.state.code}
              className="example-editor"
              mode="html"
              theme="monokai"
              showPrintMargin={false}
              showGutter={false}
              wordWrap={true}
              onChange={this.handleChange} />
        </div>
        <div className="docs-panel">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <div dangerouslySetInnerHTML={{__html: this.state.code}}></div>
        </div>
      </div>);
  }
});


var Buttons = React.createClass({
  getInitialState: function() {
    return {
      standardButtons: require('raw!./standard-buttons.html'),
      minimalButtons: require('raw!./minimal-buttons.html'),
      buttonStates: require('raw!./button-states.html'),
      specialButtons: require('raw!./special-buttons.html')
    };
  },
  render: function () {
    return (
        <section className="docs-block buttons" id="buttons">
        <h2>Buttons</h2>

          <Section name="standardButtons"
            code={this.state.standardButtons}
            title="Standard Button Styles"
            description="Primary user actions. Note that Font Awesome icons can be added to buttons when appropriate." />

          <Section name="minimalButtons"
            code={this.state.minimalButtons}
            title="Minimal Button Styles"
            description="Used for secondary user paths and actions." />

          <Section name="buttonStates"
            code={this.state.buttonStates}
            title="Button States"
            description= "These classes can be added and removed with js for a responsive and informative user experience." />

          <Section name="specialButtons"
            code={this.state.specialButtons}
            title="Special Buttons"
            description=""
          />
        </section>
      );
  }
});

module.exports = Buttons;
