//const express = require('express');
import express from 'express';
//const React = require('react');
import React from 'react';
//const renderToString = require('react-dom/server').renderToString;
import { renderToString } from 'react-dom/server';
//const Home = require('../src/client/components/Home').default;
import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	const content = renderToString(<Home />);

	const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

	res.send(html);
});

app.listen(3000, () => {
	console.log('Heard @ 3000');
});
