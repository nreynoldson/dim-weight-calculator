const express = require('express');
const app = express();

const path = require('path');

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'))
});

process.on('uncaughtException', function (error) {
    console.log(error.stack);
 });

const PORT = process.env.PORT || 8080;
app.listen(process.env.PORT || 8080, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});