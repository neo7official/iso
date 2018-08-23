import express from 'express';
import React from 'react';
import reactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import { HomeComp } from '../../client/js/components/homecomp';

const Path = require('path');
const dist_path = Path.resolve('dist/');
const server_path = Path.resolve(dist_path, 'server');

const server = express();

const assets_folder = express.static(server_path);

var data = { name: '' };

server.use('/', assets_folder);

server.get('*', (req, res) => {
  const html = reactDOMServer.renderToString(
    <StaticRouter location={req.url} context={data}>
      <HomeComp />
    </StaticRouter>
  );
  res.send(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Skills Matrix - Competency Framework</title>
  <base href="/">
  <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet"> 
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link href="./assets/css/commons.css" rel="stylesheet">
  <link href="./assets/css/index.css" rel="stylesheet">
<body> 

  <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  <div id="application" class="main">${html}</div>  

  
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="//cdn.jsdelivr.net/mojs/latest/mo.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/rellax/1.6.2/rellax.min.js"></script>
  <script src="./assets/js/index.js" async></script>
</body>
</html>`
  );
});

server.listen(3000, () => {
  console.log('Server is running on 3000 port.');
});

