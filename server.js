// import libraries
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
// import route apis

// express
const app = express();

//const job = city.salaries.map(salary => salary.job.id === "ARCHITECT");
app.get("/", (req, res) => {
	res.send("Server.js");
});

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 8888;

app.listen(port, () => console.log(`Server running on port: ${port}`));
