require('dotenv/config');

const mongoose = require('mongoose');
const fs = require('fs');

const Tour = require('../../models/tourModel');

const dbString = process.env.DB_URL.replace(
  '<PASSWORD>',
  process.env.DB_PASSWORD,
);

mongoose
  .connect(dbString)
  .then(() => console.log('Database connected successfully'));

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));

async function importData() {
  try {
    await Tour.create(tours);
    console.log('Data is successfully loaded');
  } catch (err) {
    console.log(err);
  }

  process.exit();
}

async function deleteData() {
  try {
    await Tour.deleteMany();
    console.log('Data is successfully deleted');
  } catch (err) {
    console.log(err);
  }

  process.exit();
}

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
