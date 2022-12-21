const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    collation: 'User',
    usePushEach: true,
    timestamps : {createdAt: 'created_at', updatedAt: 'updated_at'}
})

module.exports = mongoose.model('User', userSchema)