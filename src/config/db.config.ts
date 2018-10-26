class DB {

    public static connect(db: string) {
        mongoose.connect('mongodb://' + db);
    }

    public static debug(debug: any) {
        mongoose.set('debug', debug);
    }
}