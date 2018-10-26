"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { MongoClient, Db, Cursor } from "mongodb";
// import { Schema, Mongoose  } from "mongoose";
var mongoose = require("mongoose");
var static_1 = require("../static");
var MongoConfig = /** @class */ (function () {
    function MongoConfig(isLocal) {
        try {
            mongoose.connect(static_1.MongoURL, { useNewUrlParser: true });
            var conn = mongoose.connection;
            conn.on('error', console.error.bind(console, 'connection error:'));
            // Once a connection is initiated - do the following
            conn.once('open', function () {
                console.log('connected');
            });
        }
        catch (ex) {
            console.error(ex);
        }
    }
    return MongoConfig;
}());
exports.MongoConfig = MongoConfig;
// When the node process is terminated (Ctrl+c is pressed) , close the connection to the DB.
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected on app termination');
        process.exit(0);
    });
});
// getAllDocsFromColleciton(collectionName: string): Object[] {
//     if(this.dbObject) {
//         this.dbObject.collection(collectionName).find().toArray((ex, res) => {
//             if(ex) {
//                 console.log(ex);
//                 throw new Error(ex.message);
//             } else {
//                 return res;
//             }
//         });
//     }
//     throw new Error('Database not connected please try again');
// } 
//# sourceMappingURL=mongo.config.js.map