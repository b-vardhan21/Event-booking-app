const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    //which user created which event
    createdEvents: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'//name of the model to which we wanna connect this
        }
    ]
});

module.exports = mongoose.model('User', userSchema);