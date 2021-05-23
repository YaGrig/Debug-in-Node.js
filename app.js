const express = require("express"); 
var app = express();
var db = require('./db');
var user = require('./controllers/usercontroller');
var game = require('./controllers/gamecontroller')
const bp = require("body-parser");


db.sync();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
app.listen(4000, () => console.log(`App is running on http://localhost:4000`));