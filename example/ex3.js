let mysql = require('mysql')

let connection = mysql.createConnection(
    {
        host : 'database-1.c51w3te8io5h.ap-northeast-2.rds.amazonaws.com',
        user : 'node_user',
        database : 'my_test',
        password : 'node1234test'
    }
);

// let query = 'select concat(author_fname, author_lname)as "full_name" from books;'

// connection.query(query, function(error, results, fields){
//     // console.log(results)

//     console.log(results)
// })
// query = 'select concat(substring(title,1,10),"...") as "short title" from books;'
//  connection.query(query, function(error, results, fields){
//  console.log(results)
//  })

//  query = 'select concat(title, " was released in ", released_year)as "blurb" from books;'
//  connection.query(query, function(error, results, fields){
//     console.log(results)
//     })

// query = 'select title, char_length(title) as "character count" from books;'
//  connection.query(query, function(error, results, fields){
//     console.log(results)
//     })

//insert 문제는 그냥 입력하면 끝

// 최근 발간된 연도중에 5권만 조회 
// query = 'select title, released_year from books order by released_year desc limit 5;'
 
// 책 페이지수가 가장많은 책과 페이지 수 
//query = 'select title, pages from books order by pages desc limit 1;'

// 책 타이틀에 the 가 들어간 책은 몇 권인지 조회

//query = 'select count(*) as cnt from books where title like "%the%";'


// 년도 별로 몇권의 책이 출간되었는지 해당년도와 책수를 조회하세요. 

//query = 'select released_year, count(*) from books group by released_year;'


// year books avg pages 로 조회하세요. 

query = 'select released_year, count(*) as cnt, avg(pages) as "avg_pages" from books group by released_year;'



connection.query(query, function(error, results, fields){
    console.log(results)
    })

connection.end()