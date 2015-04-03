/* jshint node:true */
"use strict";

const React = require("react");

const Area = React.createClass({
  render: function () {
  var resolveRoute = function  () {
    if (!location.hash || location.hash.length ===  1) {
      require.ensure([], function  () {
        // var Atoms = require('components/atoms/Atoms.js.jsx');
        // React.render(<Atoms />, document.getElementById('area'));
      } );

    // } else if (location.hash === '#atoms') {
    //   require.ensure([], function  () {
    //     var Atoms = require('components/atoms/Atoms.js.jsx');
    //     return (
    //       <Atoms />
    //     );
    //   } );
    // }
  };

  // Resolve route on hash change
  window.onhashchange = resolveRoute;

  //Resolve current route
  resolveRoute();
  }
  }
});


module.exports = Area;




// If hot swapping can be done, do it by resolving the current route
// and render the application again
// if (module.hot) {
//   module.hot.accept(resolveRoute);
// }
