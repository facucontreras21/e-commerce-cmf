import bcrypt from 'bcryptjs/dist/bcrypt';
import mongoose from 'mongoose';
//Create Schema
const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
        isAdmin:{
            type: Boolean,
            required: true,
            default: false
        },
    },
    {
        timestamps: true,
    }
);
//Create user model
const User = mongoose.model('User', userSchema);

userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};
//Hook pre
//Only run this function if password was modified
userSchema.pre('save', async function (next){
    if (!this.isModified('password')){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
//Export user model
export default User;