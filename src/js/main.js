const React = require('react');


var resolveRoute = function  () {

  if (!location.hash || location.hash.length ===  1) {
    require.ensure([], function  () {
      var index = require('./index.js');
      React.render(<Index />, document.getElementById('main'));
    } );

  // } else if (location.hash === '#atoms') {
  //   require.ensure([], function  () {
  //     var Atoms = require('./Atoms.js');
  //     React.render(<Atoms />, document.getElementById('main'));
  //   } );
  // }
};

// Resolve route on hash change
window.onhashchange = resolveRoute;

//Resolve current route
resolveRoute();

// If hot swapping can be done, do it by resolving the current route
// and render the application again
// if (module.hot) {
//   module.hot.accept(resolveRoute);
// }