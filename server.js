var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


require('./routes/apiRoutes')(app);
require("./routes/htmlRoutes")(app);



app.listen(PORT, function () {
    console.log(`Server listening on: http://localhost:${PORT}`);
});
