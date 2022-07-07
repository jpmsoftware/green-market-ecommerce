var express = require('express');
var app = express();
var routes = require('./routes/routes.js');
var PORT = process.env.PORT || 5000;

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});