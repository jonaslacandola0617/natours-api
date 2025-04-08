import 'dotenv/config';
import app from './app';

app.listen(process.env.PORT, () => {
  console.log(`App listening to port - ${process.env.PORT}`);
});
