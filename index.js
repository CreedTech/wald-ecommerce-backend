const express = require('express');
const dbConnect = require('./config/dbConnect');
const {notFound, errorHandler} = require('./middlewares/errorHandler')
const authRouter = require('./routes/authRoute');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;

dbConnect();
// app.use('/', (req, res) => {
//   res.send('Hello from server');
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user', authRouter);


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});