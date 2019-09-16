const routes = require('next-routes')();

// 1st argument: routes
// 2nd argument: path to the component to use
routes
  .add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests', '/campaigns/requests/index');

module.exports = routes;