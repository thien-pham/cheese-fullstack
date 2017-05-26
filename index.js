const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

if (process.env.NODE_ENV === 'production') {
    // Change the cwd to server to mimic running directly
    process.chdir('server');
    // Only require inside the if block so we don't run the server code twice
    // in development
    const runServer = require('./server').runServer;
    // Just run the server
    runServer(process.env.PORT || 8080);
}
else {
    const app = express();
    // Proxy everything through to Create React App
    app.use(proxy('http://localhost:3000/', {
        logLevel: 'warn', // Keep the logs clean
        ws: true, // Proxy websockets too
        router: {
            // Anything to /api goes to our backend
            'localhost:8080/api': 'http://localhost:3001'
        }
        app.get('/api/cheeses', (req, res) => {
            const cheeses = [
                {type: 'Bath Blue'},
                {type: 'Barkham Blue'},
                {type: 'Buxton Blue'},
                {type: 'Cheshire Blue'},
                {type: 'Devoh Blue'},
                {type: 'Dorset Blue Vinney'},
                {type: 'Dovedale'},
                {type: 'Exmoor Blue'},
                {type: 'Harbourne Blue'},
                {type: 'Lanark Blue'},
                {type: 'Lymeswold'},
                {type: 'Oxford Blue'},
                {type: 'Shropshire Blue'},
                {type: 'Stichelton'},
                {type: 'Stilton'},
                {type: 'Blue Wensleydale'},
                {type: 'Yorkshire Blue'}
            ];
            res.json(cheeses);
        })
        
    }));
    app.listen(process.env.PORT || 8080);
}
