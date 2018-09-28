let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let i18n = require('i18n');

i18n.configure({
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    directory: __dirname + '/locales',
    cookie: 'lang',
    register: global,
    queryParameter: 'lang'
});
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    i18n.init(req, res);
    const reqLocale = i18n.getLocale(req);
    res.cookie('lang', reqLocale || req.cookies['lang'] );
    return next();
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = {app};
