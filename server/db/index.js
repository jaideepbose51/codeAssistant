import mongoose from 'mongoose';




// Define schemas
const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
});


const User = mongoose.model('User', UserSchema);

export {
  User
}