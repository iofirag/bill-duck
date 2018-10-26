var mongoose = require('mongoose');
var Schema = mongoose.Schema;



/* User Schema */
var userSchema = new Schema({
    user_name: String,
    password: String,
    role: String
}, { collection: 'user', _id: false });

exports.userSchema = userSchema;
// /* User Schema */
// exports.User = class {
//     constructor(params) {
//         this.email = params.email || ''
//         this.displayName = params.displayName || ''
//         this.familyName = params.familyName || ''
//         this.givenName = params.givenName || ''
//         this.imageUrl = params.imageUrl || ''
//         this.role = params.role || ''
//         // Owner data
//         this.ownerData = new OwnerData(params.ownerData)
//     }
// }

// let OwnerData = class {
//     constructor(ownerDataParams) {

//         this.owner = ownerDataParams.owner || 'autophoto'

//         switch (this.owner) {
//             case 'google':
//                 this.userId = ownerDataParams.userId || ''
//                 this.idToken = ownerDataParams.idToken || ''
//                 this.serverAuthCode = ownerDataParams.serverAuthCode || ''
//                 break;
//             case 'autophoto':
//                 break;
//         }
//     }
// }