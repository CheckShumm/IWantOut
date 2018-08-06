// import libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// import route apis
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const teleport = require("./routes/api/teleport");

// express
const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database Config
const dbConnectString = require("./config/keys").mongoURI;

// Connect to db
mongoose
	.connect(
		dbConnectString,
		{ useNewUrlParser: true }
	)
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/teleport", teleport);

const port = process.env.PORT || 8888;

app.listen(port, () => console.log(`Server running on port: ${port}`));
