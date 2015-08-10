var http = require('http')
	, express = require('express')
	, app = express()
	, path = require('path')
	, server = app.listen(process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '/www')));