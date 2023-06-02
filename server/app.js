const express = require('express');
const app = express();
const path = require('path');


// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))



// routes
app.use('/api', require('./api'))



// 404 error handling
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})





module.exports = app;