/*
To start a new project
npm init -y
npm install better-splite3
*/

// 1. Import the database driver
const databaseDriver = require('better-sqlite3');

// 2. Connect to the database
const db = databaseDriver('bands.sqlite3');
/*

Prepare astatement, execute statement

*/

// 3. Send our first query
let statement =  db.prepare('select * From bands');


// 4. Execute statement, receive results
let results = statement.all();

// 5. Check the results
console.log(results);

// 6. Using parameters
let statement2 = db.prepare(`
     SELECT * FROM bands WHERE gener = ?
     `);

     let results2 = statement2.all('Metal');

     // console.log(results2[0]);

     // Using named parameters
     let statement3 = db.prepare(`
       SELECT * From bands WHERE genre = :genre
     `);

     let results3 = statement3.all({
        genre: 'ROCK'
     })

//console.log(results3);

let Table = 'bands';
// Insert sonething into the database
let insertstatement = db.prepare(`
   INSERT INTO bands (name, genre) VALUES (:name, :genre)
`);

let resultofInsert = insertstatement.run({
 name:'Bathory',
 genre: 'Metal'

});

console.log(resultofInsert);