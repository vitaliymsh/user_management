const mongodb = require('mongodb');

const getDb = require('../util/database').getDb;

class User {

    constructor(id, first_name, last_name, email, phone, comments) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.comments = comments;
        this.status = "None";
    }

    
 
    save() {
        // User the connection
        const db = getDb();
        db
        .collection('USER-CATALOGUE')
        .insertOne(this);
    }

    update(connection, res) {

    }

    delete(connection, res) {

    }

    activate() {
        const db = getDb();
        return db
            .collection('USER-CATALOGUE')
            .updateOne(
                {  }
            )
            .toArray()
            .then(users => {
            return users;
          })
          .catch(err => {
            console.log(err);
          });
        this.status = "active";
    }

    disactivate() {
        this.status = "disactive";
    }

    static findById(id) {
        const db = getDb();
        return db.collection('USER-CATALOGUE')
            .find({ id });
    }

    static findByName(pattern) {
        const db = getDb();
        return db
            .collection('USER-CATALOGUE')
            .find({ first_name : /^pattern/})
            .toArray()
            .then(users => {
                return users;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static fetchAll() {
        const db = getDb();
        return db
            .collection('USER-CATALOGUE')
            .find()
            .toArray()
            .then(users => {
                return users;
            })
            .catch(err => {
                console.log(err);
            });
    }


}

module.exports = User;