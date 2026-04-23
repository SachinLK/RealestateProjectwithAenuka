const Example = require('../models/exampleModel');

// @desc    Get all examples
// @route   GET /api/example
// @access  Public
const getExamples = async (req, res, next) => {
  try {
    const examples = await Example.find();
    res.status(200).json({ success: true, data: examples });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new example
// @route   POST /api/example
// @access  Public
const createExample = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      res.status(400);
      throw new Error('Please provide both name and description');
    }

    const example = await Example.create({
      name,
      description,
    });

    res.status(201).json({ success: true, data: example });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getExamples,
  createExample,
};
