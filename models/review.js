const mongoose = require('mongoose'); // Get Mongoose
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
	body: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		required: false,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = mongoose.model('Review', reviewSchema);
