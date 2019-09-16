'use strict';

var routes = require('next-routes')();

// 1st argument: routes
// 2nd argument: path to the component to use
routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBO0FBQ0EsT0FDRyxBQURILElBQ08sQUFEUCxrQkFDeUIsQUFEekIsa0JBRUcsQUFGSCxJQUVPLEFBRlAsdUJBRThCLEFBRjlCLG1CQUdHLEFBSEgsSUFHTyxBQUhQLGdDQUd1QyxBQUh2Qyw2QkFJRyxBQUpILElBSU8sQUFKUCxvQ0FJMkMsQUFKM0M7O0FBTUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2hpZ2E2MTkvU2l0ZXMvdWRlbXkva2lja3N0YXJ0In0=