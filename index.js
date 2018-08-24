const app = require('express')();
const PORT = process.env.PORT || 3000;

app
    .get('/', (req, res) => {

        res.send( { "bye" : "Buddy" } );
    })
    .listen(PORT, _ => console.log('Starting in port: 3000'));