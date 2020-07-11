let mysql = require('mysql')

let connection = mysql.createConnection(
    {
        host : 'database-1.c51w3te8io5h.ap-northeast-2.rds.amazonaws.com',
        user : 'node_user',
        database : 'my_test',
        password : 'node1234test'
    }
);

let query = 'select * from books limit 20;'

connection.query(query, function(error, results, fields){
    // console.log(results)

    console.log(results)

})


connection.end()

// let query = 'select concat(author_fname, author_lname)as "full_name" from books;'
// connection.query(query, function(error, results, fields){
//  console.log(results)

//  })
// connection.end()


// query = 'select concat(author_fname, author_lname)as "full_name" from books;'
// connection.query(query, function(error, results, fields){        
//     console.log(results)    
// })

//  connection.end()

// query = 'select concat(substring(title,1,10),"...") as "short title" from books;'
//  connection.query(query, function(error, results, fields){
//  console.log(results)
//  })

//  query = 'select concat(title, " was released in ",released_year)as "blurb" from books;'
//  connection.query(query, function(error, results, fields){
//     console.log(results)
//     })
