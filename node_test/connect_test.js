// 이 파일 안에서, mysql 라이브러리를 사용하겠다. 
let mysql = require('mysql')

let connection = mysql.createConnection(
    {
        host : 'database-1.cjcxvajze0z5.ap-northeast-2.rds.amazonaws.com',
        user : 'node_user',
        database : 'my_test',
        password : 'node1234test'
    }
);
connection.query('select count(*) from memo',
             function(error, result, fields){
                 console.log(result)
             })
connection.end()             



