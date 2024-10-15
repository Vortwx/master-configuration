const mysql = require('mysql2/promise');

async function createDatabase() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootpwd'
  });

  try {
    // Create a new database
    await connection.query('CREATE DATABASE your_database_name');
    console.log('Database created successfully.');
  } catch (error) {
    console.error('Error creating database:', error);
  } finally {
    // Close the connection
    await connection.end();
  }
}

createDatabase().catch(console.error);
