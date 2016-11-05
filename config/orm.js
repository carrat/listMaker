// include mysql connection data
var connection = require('./connection.js');

// Define default global variables
var tableName = "children";
var orderBy = "id";

//define ORM functions
var orm = {
//select all from table
	selectAll: function (tableName, orderBy, cb) {
		connection.query('SELECT * FROM ? ORDER BY ?', [tableName, orderBy], function(err, res){
			if (err) throw err;
			cb(res);
		});
	},
//inset one row into table
	insertOne: function (tableName, childName, cb) {
		connection.query('INSERT INTO ? (item_name) VALUES (?)', [tableName, {"child_name": childName}], function(err, res){
			if (err) throw err;
			cb(res);
		});
	},
//update one row in table to naughty
	naughtyOne: function(tableName, childID, cb){
		connection.query('UPDATE ? SET ? VALUES (?) WHERE ?', [tableName, {"naughty": 1}, [{"id": childID}]], function(err, res){
			if (err) throw err;
			cb(res);
		});
	},
//update one row in table to nice
	niceOne: function(tableName, childID, cb){
		connection.query('UPDATE ? SET ? VALUES (?) WHERE ?', [tableName, {"naughty": 1}, [{"id": childID}]], function(err, res){
			if (err) throw err;
			cb(res);
		});
	},
//delete one row from table
	deleteOne: function(tableName, childID, cb){
		connection.query('DELETE FROM ? WHERE ?', [tableName, [{"id": childID}]], function(err, res){
			if (err) throw err;
			cb(res);
		});
	}

};

//export ORM functions
module.exports = orm;