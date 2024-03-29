const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const product = new Schema({
  nome: {
    type: String,
  },
  petshop_id: {
    type: Schema.Types.ObjectId,
    ref: "Petshop",
  },
  preco: {
    type: Number,
  },
  capa: {
    type: String,
  },
  preco: {
    type: Number,
  },
  avaliacoes: {
    type: Number,
  },
});
module.exports = mongoose.model("Product", product);
