const express = require('express');
const app = express();
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('../src/client/components/Home').default;

app.get('/', (req, res) => {
	const content = renderToString(<Home />);

	res.send(content);
});

app.listen(3000, () => {
	console.log('Heard @ 3000');
});
