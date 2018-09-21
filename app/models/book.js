// Dependencies
// =============================================================

// Require the sequelize library
var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require("..config/connection.js")
// Create a "Book" model with the following configuration
var Book = sequelize.define('book', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    genre: {
        type: Sequelize.STRING
    },
    pages: {
          type: Sequelize.STRING
    }
      },{timestamps: false
      });

// Sync model with DB
Book.sync();
// Export the book model for other files to use
module.exports = Book;