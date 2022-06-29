const express = require('express');
let port = process.env.PORT || 500;
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((_, res, next) => {
	res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
	res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
	next();
});

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
	console.log('app running successfully on ' + port);
});
