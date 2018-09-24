import { MongoClient, Server } from "mongodb";

export class MongoConfig {
    mongoURL: string = '';
    port: number = 8858;
    
    constructor(isLocal?: boolean) {
        if(isLocal) {
            new Server('localhost', this.port);
        } else {
            // Connect using MongoClient
            MongoClient.connect(this.mongoURL, (err, db) => {
                err ? console.error('mongoDB ex:', err) : null;
                
                return db;
            });
        }
    }
}