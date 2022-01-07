const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",  
    user: "root",
    password: "cdac",
    database: "day1",
  };
  
  const selectAllUser =async() => {
      const connection =mysql.createConnection(dbinfo);
      await connection.connectAsync();

      let sql ='select * from user';
      const list = await connection.queryAsync(sql);

      await connection.endAysnc();
      return list;

  };

  const addUser =async (user) =>{
      const connection =mysql.createConnection(dbinfo);
      await connection.connectAsync();
      
      let sql='INSERT into user(sendmsg, postmsg) values(?, ?)';
      connection.queryAsync(sql, [user.sendmsg, user.postmsg]);
      console.log("Message added in database");
  
  };
  module.exports ={ selectAllUser,addUser};