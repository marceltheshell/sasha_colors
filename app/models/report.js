var mongoose = require('mongoose');

// define our model
// module.exports allows us to pass this to other files when it is called

var schema = new mongoose.Schema({ 
	teacherName: 'string', 
	time: { type : Date, default: Date.now }, 
	color: 'string', 
	notes: 'string' 
});

module.exports = mongoose.model('Report', schema);
