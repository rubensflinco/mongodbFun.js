var config = require('/mongodbFunConfig');



// fução para inserir um dado em uma collection
function create(cName, query, database = config.mongodb.database) {
    return new Promise((resolve, reject) => {

        var config = require('../config');
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://" + config.mongodb.host + ":" + config.mongodb.porta + "/" + database + "";
        var urlO = { useNewUrlParser: true };

        // conecta no banco
        MongoClient.connect(url, urlO, function (err, db) {
            if (err) {
                console.log("BANCO-Create: (ERRO)  " + err);
                reject(err)
                return;
            }
            // modifica a database da padrão apra a seleciona na function
            var dbo = db.db(database);
            // insere um dado na collection
            var x = Math.floor((Math.random() * 9999) + 1);
            var queryEdit = JSON.parse(JSON.stringify(query).replace('{', '{ "id": ' + x + ', '));
            dbo.collection(cName).insertOne(queryEdit, function (err, res) {
                if (err) {
                    console.log("BANCO-Create: (ERRO)  " + err);
                    reject(err)
                    return;
                }
                console.log("BANCO-Create: (OK)  Collection: " + cName);
                resolve(res);
                db.close();
            });
        });

    });
}

















// fução para buscar dados em uma collection
function find(cName, query, database = config.mongodb.database) {
    return new Promise((resolve, reject) => {

        var config = require('../config');
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://" + config.mongodb.host + ":" + config.mongodb.porta + "/" + database + "";
        var urlO = { useNewUrlParser: true };

        // conecta no banco
        MongoClient.connect(url, urlO, function (err, db) {
            if (err) {
                console.log("BANCO-Find: (ERRO)  " + err);
                reject(err)
                return;
            }
            // modifica a database da padrão apra a seleciona na function
            var dbo = db.db(database);
            // buscar dados na collection
            dbo.collection(cName).find(query).toArray(function (err, res) {
                if (err) {
                    console.log("BANCO-Find: (ERRO)  " + err);
                    reject(err)
                    return;
                }
                console.log("BANCO-Find: (OK)  Collection: " + cName);
                resolve(res);
                db.close();
            });
        });

    });
}

















// fução para deletar um dado em uma collection
function remove(cName, query, database = config.mongodb.database) {
    return new Promise((resolve, reject) => {

        var config = require('../config');
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://" + config.mongodb.host + ":" + config.mongodb.porta + "/" + database + "";
        var urlO = { useNewUrlParser: true };

        // conecta no banco
        MongoClient.connect(url, urlO, function (err, db) {
            if (err) {
                console.log("BANCO-Remove: (ERRO)  " + err);
                reject(err)
                return;
            }
            // modifica a database da padrão apra a seleciona na function
            var dbo = db.db(database);
            // insere um dado na collection
            dbo.collection(cName).deleteOne(query, function (err, res) {
                if (err) {
                    console.log("BANCO-Remove: (ERRO)  " + err);
                    reject(err)
                    return;
                }
                console.log("BANCO-Remove: (OK)  Collection: " + cName);
                resolve(res);
                db.close();
            });
        });

    });
}

















// fução para inserir um dado em uma collection
function update(cName, query, jsonNew, database = config.mongodb.database) {
    return new Promise((resolve, reject) => {

        var config = require('../config');
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://" + config.mongodb.host + ":" + config.mongodb.porta + "/" + database + "";
        var urlO = { useNewUrlParser: true };

        // conecta no banco
        MongoClient.connect(url, urlO, function (err, db) {
            if (err) {
                console.log("BANCO-Update: (ERRO)  " + err);
                reject(err)
                return;
            }
            // modifica a database da padrão apra a seleciona na function
            var dbo = db.db(database);
            // insere um dado na collection
            var jsonEdit = { $set: jsonNew };
            dbo.collection(cName).updateOne(query, jsonEdit, function (err, res) {
                if (err) {
                    console.log("BANCO-Update: (ERRO)  " + err);
                    reject(err)
                    return;
                }
                console.log("BANCO-Update: (OK)  Collection: " + cName);
                resolve(res);
                db.close();
            });
        });

    });
}



// exporta a função para poder ser usada em outros locais
module.exports = { create, find, remove, update };