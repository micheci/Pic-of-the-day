const mongoose = require("mongoose");

const FavoritSchema = new mongoose.Schema({
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Favorite", FavoritSchema);
