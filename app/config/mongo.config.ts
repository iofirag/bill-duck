import { MongoClient, Server, Db } from "mongodb";

export class MongoConfig {
    mongoURL: string = '';
    port: number = 8858;
    dbObject: Db | undefined = undefined;
    
    constructor(isLocal?: boolean) {
        if(isLocal) {
            MongoClient.connect(`localhost:${this.port}`, (err, db) => {
                err ? console.error('mongoDB ex:', err) : console.log('connected successfuly to local mongoDB');

                this.dbObject = db.db();
            });
        } else {
            // Connect using MongoClient
            MongoClient.connect(this.mongoURL, (err, db) => {
                err ? console.error('mongoDB ex:', err) : console.log('connected successfuly to online mongoDB');
                
                this.dbObject = db.db();
            });
        }
    }
}