const mysql2 = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();
// console.log(process.env.DB_PASSWORD);

//access the database
const connection = mysql2.createPool({
  host: 'localhost',
  user: 'Team-2',
  password: process.env.DB_PASSWORD,
  database: 'evangadi_forum',
  connectionLimit: 10, // Maximum number of connections allowed
});

//connection test
// connection.execute(`select 'test'`, (err, result) => {
//   if (err) return console.error(err.message);

//   console.log(result);
// });

module.exports = connection.promise();
