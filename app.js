var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//* path to the route files
var GetRouter = require('./routes/indexGet');
var PostRouter = require('./routes/indexPost');
var DeleteRouter = require('./routes/indexDelete');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// path to use when user makes a request
app.use('/apiGet',GetRouter);
app.use('/apiPost',PostRouter);
app.use('/apiDelete',DeleteRouter);

//* redirect all / requests to /apiGet
app.get('/', function(req, res) {
  res.redirect('/apiGet/');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
