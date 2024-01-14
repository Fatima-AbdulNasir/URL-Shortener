/*const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // You can include other user-related fields as needed
});

const User = mongoose.model('User', UserSchema);
module.exports = User;*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
 email: {
    type: String,
    required: true,
    unique: true,
 },
 urls: [
    {
      type: Schema.Types.ObjectId,
      ref: "Url",
    },
 ],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
