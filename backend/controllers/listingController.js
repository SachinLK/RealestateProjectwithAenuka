const Listing = require('../models/Listing');

// @desc    Get all listings
// @route   GET /api/listings
// @access  Public
exports.getListings = async (req, res, next) => {
  try {
    const listings = await Listing.find().populate('lister', 'name email');
    res.status(200).json({ success: true, count: listings.length, data: listings });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single listing
// @route   GET /api/listings/:id
// @access  Public
exports.getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id).populate('lister', 'name email');
    if (!listing) {
      res.status(404);
      throw new Error('Listing not found');
    }
    res.status(200).json({ success: true, data: listing });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new listing
// @route   POST /api/listings
// @access  Private (Lister, Admin)
exports.createListing = async (req, res, next) => {
  try {
    // Add user to req.body
    req.body.lister = req.user.id;

    if (req.file) {
      req.body.imageUrl = req.file.path;
    }

    const listing = await Listing.create(req.body);

    res.status(201).json({
      success: true,
      data: listing
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update listing
// @route   PUT /api/listings/:id
// @access  Private (Lister, Admin)
exports.updateListing = async (req, res, next) => {
  try {
    let listing = await Listing.findById(req.params.id);

    if (!listing) {
      res.status(404);
      throw new Error('Listing not found');
    }

    // Make sure user is listing owner or an Admin
    if (listing.lister.toString() !== req.user.id && req.user.role !== 'Admin') {
      res.status(403);
      throw new Error(`User ${req.user.id} is not authorized to update this listing`);
    }

    if (req.file) {
      req.body.imageUrl = req.file.path;
    }

    listing = await Listing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({ success: true, data: listing });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete listing
// @route   DELETE /api/listings/:id
// @access  Private (Lister, Admin)
exports.deleteListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      res.status(404);
      throw new Error('Listing not found');
    }

    // Make sure user is listing owner or an Admin
    if (listing.lister.toString() !== req.user.id && req.user.role !== 'Admin') {
      res.status(403);
      throw new Error(`User ${req.user.id} is not authorized to delete this listing`);
    }

    await listing.deleteOne();

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
