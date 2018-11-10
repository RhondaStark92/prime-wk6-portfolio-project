const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// bring in ROUTES
const projectRouter = require('./routes/project.router');
const tagRouter = require('./routes/tag.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

// Serve static files
app.use(express.static('build'));

/** ---------- ASSIGN ROUTES ---------- **/
app.use('/api/project', projectRouter);
app.use('/api/tag', tagRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});