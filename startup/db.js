const {MongoClient} = require("mongodb");
const url = 'your mongodb licence'; 
module.exports = class {
  constructor(){
     
this.client = new MongoClient(url)
this.dbName = "username"
this.db = this.client.db(this.dbName)
  }
 async connectDb  (){
    await this.client.connect();
  console.log('Connected successfully to server');
}
}



