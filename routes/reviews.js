const express = require('express'); // Get Express
const router = express.Router({ mergeParams: true });
const Campground = require('../models/campground');
const Review = require('../models/review');
const reviews = require('../controllers/reviews');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');
const catchAsync = require('../utils/catchAsync');

// Save new Review to database
router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview));

// Delete review from database
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;
