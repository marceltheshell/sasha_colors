// grab the nerd model we just created
var Report = require('./models/report');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        app.get('/api/reports', function(req, res) {
            // use mongoose to get all reports in the database
            Report.find(function(err, reports) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(reports); // return all nerds in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };
