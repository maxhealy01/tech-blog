const Sequelize = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PW,
	{
		host: "localhost",
		dialect: "mysql",
		port: 3306,
		socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
	}
);

module.exports = sequelize;
