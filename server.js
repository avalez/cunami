import express from 'express'
import http from 'http'
import path from 'path'
import os from 'os'

const app = express()
const devEnv = app.get('env') === 'development';

const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

const port = process.env.PORT || 3000

app.set('port', port)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/index.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.js'))
})

http.createServer(app).listen(port, () => {
  console.log('App server running at http://' + os.hostname() + ':' + port);
})

if (devEnv) {
  const Bundler = require('parcel-bundler')
  const Path = require('path')

  const entryFiles = Path.join(__dirname, '*.jsx')
  const options = {
    outDir: 'dist', // /node
    watch: true,
    global: '__root_component', // browserOnly
    target: 'browser'  // node
  };
  const bundler = new Bundler(entryFiles, options);
  bundler.bundle()
}
