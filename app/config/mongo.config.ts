import { MongoClient, Db, Cursor } from "mongodb";
import { Schema } from "mongoose";

export class MongoConfig {
    mongoURL: string = 'mongodb://aadmin:aadmin1123@ds038547.mlab.com:38547/bill-duck';
    port: number = 8858;
    dbObject: Db | undefined = undefined;
    
    constructor(isLocal?: boolean) {
        try {
            if(isLocal) {
                MongoClient.connect(`mongodb://localhost:${this.port}`, (err, db) => {
                    err ? console.error('mongoDB ex:', err) : console.log('connected successfuly to local mongoDB');
    
                    this.dbObject = db.db();
                });
            } else {
                // Connect using MongoClient
                MongoClient.connect(this.mongoURL, (err, db) => {
                    if(err) {
                        console.error('mongoDB ex:', err); 
                    } else {
                        console.log('connected successfuly to online mongoDB');
                        
                        this.dbObject = db.db();
                    }
                });
            }    
        } catch(ex) {
            console.error(ex);
        }
    }

    getAllDocsFromColleciton(collectionName: string): Object[] {
        if(this.dbObject) {
            this.dbObject.collection(collectionName).find().toArray((ex, res) => {
                if(ex) {
                    console.log(ex);
                    throw new Error(ex.message);
                } else {
                    return res;
                }
            });
        }

        throw new Error('Database not connected please try again');
    }
}

export var StockSchema: Schema = new Schema();