/**
 * Author: Jeff Whelpley
 * Date: 1/26/14
 *
 * This module contain the primary server container code for both the API
 * and the web server.
 */
module.exports = function (Q, _, Hapi, pancakes, log, config, chainPromises) {

    // this contains the list of middleware (in order) for each container
    var mwConfig = {
        api:        ['mwErrorHandling', 'mwServiceInit', 'mwSecurity', 'mwCaller', 'mwApiRoutes'],
        webserver:  ['mwErrorHandling', 'mwServiceInit', 'mwSecurity', 'mwCaller',
                        'mwTasks', 'mwAppContext', 'mwWebRoutes', 'mwTracking']
    };

    /**
     * Get a Hapi server
     */
    function getServer(container) {
        var server = new Hapi.Server();
        server.connection({ port: process.env.PORT || config[container].port });
        return server;
    }

    /**
     * Start the server
     * @param ctx
     */
    function startServer(ctx) {
        var deferred = Q.defer();
        ctx.server.start(function () { deferred.resolve(ctx); });
        return deferred.promise;
    }

    /**
     * Initialize the server and middleware and then start the server
     */
    function init(container) {
        var ctx = {
            container:  container,
            server:     getServer(container)
        };
        var calls = mwConfig[container].map(function (name) {
            var mw = pancakes.cook(name);
            return mw.init;
        });

        // after all the middleware is done, start the server
        calls.push(startServer);

        // execute all the calls
        return chainPromises(calls, ctx);
    }

    return {
        getServer: getServer,
        startServer: startServer,
        init: init
    };
};



