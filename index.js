
const ws = require('ws');
// const app = express();
const web = new ws.Server({ port: 3000 });

web.on('connection',(server) => {
  server.on('error', (err) =>{console.log(err)});
  server.on('close', () =>{console.log('Server closed');});
  server.on('message', (data) =>{
console.log(data);
  });
  server.send(JSON.stringify({ message: 'hello world1' }));
});
