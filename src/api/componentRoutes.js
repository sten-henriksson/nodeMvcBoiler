//import and init all component routes
const exampleroute = require('./components/example/routes');
exports.initRestRoutes = function (app) {
    exampleroute.movieDataRoute(app); 

};