// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

const domino = require('domino');
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import * as compression from 'compression';
import * as cookieparser from 'cookie-parser';
import { join } from 'path';
import { readFileSync } from 'fs';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

/* function angularSpaRoute(req, res) {
	res.render('index', { req, res });
} */

// Express server
const app = express();
app.use(compression());
app.use(cookieparser());

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');
console.log('29 -- ', DIST_FOLDER);

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
// fix window is not defined problem.
const win = domino.createWindow(template);

global['window'] = win;
global['document'] = win.document;
global['DOMTokenList'] = win.DOMTokenList;
/* global['Node'] = win.Node;
global['Text'] = win.Text;
global['HTMLElement'] = win.HTMLElement; */
global['navigator'] = win.navigator;

import { ngExpressEngine } from '@nguniversal/express-engine';

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

app.engine('html', ngExpressEngine({
	bootstrap: AppServerModuleNgFactory,
	providers: [
		provideModuleMap(LAZY_MODULE_MAP)
	]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
	res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});

// Start up the Node server
app.listen(PORT, () => {
	console.log(`Node server listening on http://localhost:${PORT}`);
});
