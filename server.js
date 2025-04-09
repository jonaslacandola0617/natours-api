require('dotenv/config');
const mongoose = require('mongoose');

const app = require('./app');

const dbString = process.env.DB_URL.replace(
  '<PASSWORD>',
  process.env.DB_PASSWORD,
);

mongoose
  .connect(dbString)
  .then(() => console.log('Database connected successfully'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening to port - ${process.env.PORT}`);
});
