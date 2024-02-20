const express = require('express');
const http = require('http');
const bodyParser = require('body-parser'); 
const Routes = require('./routes/sample');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(__dirname)); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
});

app.use('/api', Routes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
