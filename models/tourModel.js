const mongoose = require('mongoose');

const Tour = mongoose.model(
  'Tour',
  new mongoose.Schema({
    id: mongoose.SchemaTypes.UUID,
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
    },
    rating: { type: Number, default: 4.5 },
    price: { type: Number, required: [true, 'A tour must have a price'] },
  }),
);

module.exports = Tour;
