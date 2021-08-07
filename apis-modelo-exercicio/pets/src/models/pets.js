const mongoose = require('mongoose');

const petsSchema = new mongoose.Schema({
    "id": 2,
        "nomeFantasia": { type: String },
        "endereco": { type: String },
        "telefone": { type: String },
        "atende": { type: String }
},{
    
    versionKey: false
});

module.exports = pets