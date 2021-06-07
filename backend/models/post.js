const { Schema, model } = require('mongoose');

const postSchema = new Schema({
	title: {
		type: String,
		required: true,
		maxlength: 100,
	},

	postID: {
		required: true,
		type: String,
	},

	// User ID
	ID: {
		required: true,
		type: String,
	},

	body: {
		required: true,
		type: String,
		maxlength: 300,
	},

	author: {
		required: true,
		type: String,
		maxlength: 20,
	},

	posted: {
		required: true,
		type: Date,
		default: Date.now(),
	},

	visibility: {
		// For anonymous posting
		type: Boolean,
		default: true,
	},

	likes: {
		type: Number,
		default: 0,
		max: 100,
	},
});

module.exports = model('Post', postSchema);