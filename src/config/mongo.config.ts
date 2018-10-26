// import { MongoClient, Db, Cursor } from "mongodb";
// import { Schema, Mongoose  } from "mongoose";
import * as mongoose from 'mongoose'
import { MongoURL } from "../static";

export class MongoConfig {
    
    constructor(isLocal?: boolean) {
        try {
            mongoose.connect(MongoURL, { useNewUrlParser: true });
            mongoose.set('useCreateIndex', true);
            mongoose.set('useFindAndModify', false)
            let conn = mongoose.connection;
            conn.on('error', console.error.bind(console, 'connection error:'));
            // Once a connection is initiated - do the following
            conn.once('open', () => {
                console.log('connected');
            });
        } catch(ex) {
            console.error(ex);
        }
    }
}

// When the node process is terminated (Ctrl+c is pressed) , close the connection to the DB.
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
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