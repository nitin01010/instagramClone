const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1:27017/insta';


const main = async () => {
    try {
        await mongoose.connect(url);
        console.log(`mondodb is connect`.bgYellow.black);
    } catch (error) {
        console.log(`there is one ${error} || Shema`);
    }
}
main();

const userShema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required']
    },
    follower: Number,
    following: Number,
    post: Number
});

const userModel = mongoose.model('users', userShema);

module.exports = userModel;