import mongoose from 'mongoose'

const UserShema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Veuillez ajouter votre nom d'utilisateur"],
        unique: true,
        trim: true,
        maxlength: [40, "Votre nom d'utilisateur ne doit pas être supérieur à 40 charactères"]
    }
})

module.exports = mongoose.models.User || mongoose.model('User', UserShema)