import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/components/Routes';
//import Home from '../client/components/Home';

const Renderer = (req) => {
	// const content = renderToString(<Home />);
	const content = renderToString(
		<StaticRouter location={req.path} context={{}}>
			<Routes />
		</StaticRouter>
	);

	const HTML = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

	return HTML;
};

export default Renderer;
