const app = require('express')();
const PORT = process.env.PORT || 3000;

app
    .get('/', (req, res) => {

        res.send('<h1>Hola mundo</h1>');
    })
    .listen(PORT, _ => console.log('Starting in port: 3000'));