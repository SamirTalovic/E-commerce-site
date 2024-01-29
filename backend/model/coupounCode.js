const mongoose = require("mongoose");

const coupounCodeSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please enter your coupoun code name!"],
        unique: true,
    },
    value:{
        type: Number,
        required: true,
    },
    minAmount:{
        type: Number,
        default: 0

    },
    maxAmount:{
        type: Number,
        default: 0
    },
    shopId:{
     type: String,
     required: true,
    },
    selectedProduct:{
     type: String,
     default: null
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("CoupounCode", coupounCodeSchema);
