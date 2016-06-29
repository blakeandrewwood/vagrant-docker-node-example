'use strict';

const express = require('express');
const pg = require('pg');

// Constants
const PORT = 8080;

// App
const app = express();

app.get('/', function (req, res) {

    console.log('hello world ------------ !!');

	var Pool = require('pg').Pool;
	var pool = new Pool({
		user: "postgres",
		password: "secret",
		host: "postgres",
		post: 5432,
		database: "postgres" 
	});

	pool.connect(function(err, client, done) {
		if(err) {
			res.send(err);
		}
		client.query('select * from information_schema.tables', 
        function(err, results) {
			done();
			if(err) {
				res.send(err);
			}
			res.send(results);
		});
	});

});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
