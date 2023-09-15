const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const path = require('path');
const logger = require('morgan');
const connectDB = require("./config/db");

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express(); 
app.use(express.json());
app.use(cookieParser());
const corsOpts = {
  origin: ['http://localhost:3000'],
  credentials: true,
};
app.use(cors(corsOpts));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

connectDB();

const orderRouter = require('./routes/orderRoutes');
const menuRouter = require('./routes/menuRoutes');
const empRouter = require('./routes/empRoutes');

app.use('/api/order', orderRouter);
app.use('/api/menu', menuRouter);
app.use('/api/emp', empRouter);;


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  }


// start express server on port 5000 or process.env.PORT
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}/`)
);
