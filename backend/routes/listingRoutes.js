const express = require('express');
const {
  getListings,
  getListing,
  createListing,
  updateListing,
  deleteListing
} = require('../controllers/listingController');

const { protect, authorize } = require('../middlewares/authMiddleware');
const { upload } = require('../middlewares/uploadMiddleware');

const router = express.Router();

router
  .route('/')
  .get(getListings)
  .post(protect, authorize('Lister', 'Admin'), upload.single('image'), createListing);

router
  .route('/:id')
  .get(getListing)
  .put(protect, authorize('Lister', 'Admin'), upload.single('image'), updateListing)
  .delete(protect, authorize('Lister', 'Admin'), deleteListing);

module.exports = router;
