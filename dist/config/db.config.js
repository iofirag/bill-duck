"use strict";
var DB = /** @class */ (function () {
    function DB() {
    }
    DB.connect = function (db) {
        mongoose.connect('mongodb://' + db);
    };
    DB.debug = function (debug) {
        mongoose.set('debug', debug);
    };
    return DB;
}());
//# sourceMappingURL=db.config.js.map