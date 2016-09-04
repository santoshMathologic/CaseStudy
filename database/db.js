var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/casestudy', function(error) {
    if (error) {
        console.log('Error in Connection', error);
    } else {
        console.log('Connection Successfully');
    }
});

