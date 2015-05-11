/* jslint node: true */
// "use strict";

const React = require("react");
require("./base/_config");

const Docs = require('./components/docs/Docs.jsx');
// We create a function that will lazy load modules based on the current hash
var resolveRoute = function () {

  // If no hash or hash is '#' we lazy load the Home component
  if (!location.hash || location.hash.length === 1) {
    require.ensure([], function () {
      React.render(<Docs area="Home" />, document.getElementById('main'));
    });

    // Or if route is #admin we lazy load that
  } else if (location.hash === '#atoms') {
    require.ensure([], function () {
      React.render(<Docs area="Atoms" />, document.getElementById('main'));
    });
  }

};

// Resolve route on hash change
window.onhashchange = resolveRoute;

// Resolve current route
resolveRoute();


//const Container = require("./components/container/Container.js.jsx");

//React.render(<Container />, document.getElementById("main"));