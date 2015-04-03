/* jslint node: true */
"use strict";

const React = require("react");
require("components/forms/_forms");

const Forms = React.createClass({
  render: function () {
    return (
      <section className="forms" id="forms">
      <h2>Form Fields &amp; Inputs</h2>

      <form className="docs-form">
      <h3>Anatomy of Inputs</h3>
      <p>A form field is made up of a parent <code>label</code>, wrapping:
        <ul className="standard-list">
        <li>a <code>div</code> with the field label text in it,</li>
        <li>a <code>span className="invalid-message"</code> with the hover message (optionally),</li>
        <li>and the <code>input</code> itself (which has a placeholder data hint).</li>
        </ul>
      </p>
      <p>The <code>label</code> holds the classNamees needed for validation case styling.</p>
      <label className="is-required">
      <div className="label-text">Field Label </div><span className="invalid-message">Required</span>
      <input type="text" placeholder="input data hint" />
      </label>
      <p>Selects use an invalid default choice as an input hint like: <em>- do this -</em></p>
      <label className="is-required">
      <div className="label-text">Select </div><span className="invalid-message">Required</span>
      <select type="text" placeholder="input data hint">
      <option value="">- Choose Something -</option>
      <option value="">Bud Lite Lime-a-Rita</option>
      <option value="">Cool Ranch Doritoes</option>
      <option value="">Chill Party Bro</option>
      </select>
      </label>

      </form>

      <form className="docs-form">
      <h3>Validation Cases</h3>
      <p><code>is-pristine, is-invalid, is-dirty, is-valid, is-required</code></p>
      <label className="is-pristine">
      <div className="label-text">Pristine<span className="invalid-message">loaded this way</span></div>
      <input type="text" placeholder="untouched" />
      </label>
      <label className="is-dirty">
      <div className="label-text">Dirty<span className="invalid-message">Touched</span></div>
      <input type="text" placeholder="in process" />
      </label>
      <label className="is-required">
      <div className="label-text">Required<span className="invalid-message">Not optional</span></div>
      <input type="text" placeholder="you must enter something" />
      </label>
      <label className="is-invalid">
      <div className="label-text">Invalid</div><span className="invalid-message">wrong</span>
      <input type="text" placeholder="HEUREHEUEHEHRHEHRHUH" />
      <span className="invalid-message--below">explanation of problem with .invalid-message--below</span>
      </label>
      <label className="is-valid">
      <div className="label-text">Valid<span className="invalid-message">Correct</span></div>
      <input type="text" placeholder="Incredible Input, User. Well typed. #golfclap" />
      </label>

      <h3>Mixed Cases</h3>
      <label className="is-required is-pristine">
      <div className="label-text">Required and Pristine<span className="invalid-message">Not optional</span></div>
      <input type="text" placeholder="same as only required" />
      </label>
      <label className="is-required is-dirty">
      <div className="label-text">Required and Dirty<span className="invalid-message">Not optional</span></div>
      <input type="text" placeholder="you must enter something" />
      </label>
      <label className="is-dirty is-invalid">
      <div className="label-text">Dirty &amp; Invalid<span className="invalid-message">Messed Up</span></div>
      <input type="text" placeholder="It was you"  />
      </label>
      <label className="is-pristine is-required is-invalid">
      <div className="label-text">Pristine &amp; Invalid &amp; Required<span className="invalid-message">Messed Up</span></div>
      <input type="text" placeholder="It's not you; It's me." />
      </label>
      <label className="is-required is-dirty is-invalid">
      <div className="label-text">Dirty &amp; Invalid &amp; Required<span className="invalid-message">Messed Up</span></div>
      <input type="text" placeholder="Seriously, what are you even" />
      </label>

      <p>For browsers that allow empty default option selection, add className <code>.is-dropdown</code> to label to move the !</p>
      <label className="input--select is-invalid is-dirty">
      <div className="label-text">Dirty &amp; Invalid Select </div><span className="invalid-message">Required</span>
      <select type="text" >
      <option value="">- Wrong Choice Buddy -</option>
      </select>
      </label>

      <h3>Alterations for various field types</h3>
      <label className="input--select is-invalid">
      <div className="label-text">Invalid Select </div><span className="invalid-message">Required</span>
      <select type="text" >
      <option value="">- You keep using that word... -</option>
      </select>
      </label>
      <label className="input--number is-invalid">
      <div className="label-text">Invalid Number </div><span className="invalid-message">Required</span>
      <input type="number" placeholder="1.9er" />
      </label>
      <label className="input--checkbox is-invalid" >
      <input type="checkbox" />
      <div className="label-text">Checkbox </div><span className="invalid-message">Required</span>

      </label>
      <label className="input--radio is-invalid" >
      <input type="radio" />
      <div className="label-text">Radio </div><span className="invalid-message">Required</span>
      </label>

      </form>
      </section>
      );
}
});

module.exports = Forms;
