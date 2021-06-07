const { Router } = require('express');
const router = new Router();
const Post = require('../models/post');
const User = require('../models/user');

router.get('/', (req, res) => {
	return res.redirect('/post/all');
});

router.get('/all', async (req, res) => {
	res.json({ hi:'hi' });
	// Send posts that should be visible
});

router.get('/my-posts', async (req, res) => {
	if(!isLoggedIn()) res.redirect('/google');
	const user = User.findOne({ email: req.body.email });
	const postsByMe = await Post.find({ ID: user._id });
	if(!postsByMe.length) return res.status(200).json({ posts: 'No posts' });
	return res.status(200).json({ posts: postsByMe });
});

router.get('/:ID', async (req, res) => {
	const post = await Post.findOne({ postID: req.params.ID });
	// Not found
	if(!post) return res.redirect('/404');
	else return res.status(200).json({ post: post });
});

router.post('/new', async (req, res) => {
	const title = req.body.title;
	const content = req.body.content;
	const author = await User.findOne({ email: req.body.email });
	const visibility = req.body.visiblity;
	const postID = genID(8);
	const newPost = new Post({
		title: title,
		postID: postID,
		ID: author._id,
		body: content,
		author: author.name,
		visibility: visibility ? visibility : false,
	});
	await newPost.save();
	console.log(postID);
	return res.redirect(`/post/${postID}`);
});

/**
 * Returns if user is loggedIn or not?
 */
const isLoggedIn = () => {
	return true;
};

/**
 * Generated the unique ID
 * @param times Length of ID that should be generated!
 * @return ID of specified length
 */
const genID = (times = 8) => {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const segment = () => chars.charAt(Math.floor(Math.random() * chars.length));
	let ID = '';
	for(let i = 0; i < times; i++) ID += segment();
	return ID;
};

module.exports = router;