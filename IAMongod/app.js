var express = require('express');
var logger = require('morgan');
const productsRouter = require('./product/productsRouter')
const mongoose = require('mongoose')

mongoose
  .connect("mongodb://127.0.0.1:27017/IAMongod")
  .then(() =>{
    console.log('MONGO DB CONNECTED')
  })
  .catch((err) =>{
    console.log(err)
  })


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productsRouter)


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
