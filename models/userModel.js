const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,

        default: false
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
});


userSchema.methods.generateToken = async function () {
    try {
        return  jwt.sign(
            {
                userId: this.id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
                reviews: this.reviews
 
            },
        process.env.JWT_SECRET,
            {
                expiresIn: '30d'
            }
        )

    }
    catch (error) {
        console.error(error );
    }

}

const User = mongoose.model('User', userSchema);
module.exports = User;