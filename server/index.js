const path = require('path');
const express = require('express');

const app = express();

// API endpoints go here!
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
 });


// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function


// app.get(/^(?!\/api(\/|$))/, (req, res) => {
//     const index = path.resolve(__dirname, '../client/build', 'index.html');
//     res.sendFile(index);
// });

let server;
function runServer(port=3001) {
  return new Promise((resolve, reject) => {
      server = app.listen(port, () => {
          resolve();
        }).on('error', reject);
    });
}

function closeServer() {
  return new Promise((resolve, reject) => {
      server.close(err => {
          if (err) {
              return reject(err);
            }
          resolve();
        });
    });
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app, runServer, closeServer
};
