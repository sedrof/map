var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var hbs = require('express-handlebars');
var cons = require('consolidate');

var indexRouter = require('./routes/index');

var app = express();


// view engine setup
// app.engine('hbs', hbs({extname : 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/'}));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// app.use('/js',  express.static(path.join(__dirname , 'public/js')));
// app.use("/public/", express.static('./public'));

app.use("/public/", express.static('./public'));
app.use("/js/", express.static('./public/js'));
app.use("/stylesheets/", express.static('./public/stylesheets'));
app.use("/routes/", express.static('./routes'));
app.use("/data/", express.static('./views/data'));




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
