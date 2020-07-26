// singleton es un patron de diseño
// donde solo puede existir una instancia
// de una clase

class Database {
    constructor(data) {
        if (Database.exists) {
            return Database.instance
        }
        this._data = data;
        Database.instance = this
        Database.exists = true
        return this;
    }
    getData() {
        return this._data;
    }
    setData(data) {
        this._data = data;
    }
}

const mongo = new Database('mongo')
console.log(mongo.getData())

const othermongo = new Database('mongo')
console.log(mongo == othermongo)

const mysql = new Database('mysql')
console.log(mongo == mysql)
console.log(mysql.getData())