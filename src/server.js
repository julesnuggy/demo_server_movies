const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const moviesRouter = require('./routers/movies.js')

app.use('/movies', moviesRouter)

module.exports = app
