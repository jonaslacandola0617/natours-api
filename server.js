require('dotenv/config');

const app = require('./app');

app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening to port - ${process.env.PORT}`);
});
