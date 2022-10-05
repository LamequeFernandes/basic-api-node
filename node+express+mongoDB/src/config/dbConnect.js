import mongoose from "mongoose";

// mongoose.connect('mongodb+srv://lamequesao:wmtzf48nnmEqjHxw@cluster0.5rtgarf.mongodb.net/?teste-node');
mongoose.connect('mongodb+srv://lamequesao:wmtzf48nnmEqjHxw@cluster0.5rtgarf.mongodb.net/teste-node');

let db = mongoose.connection;

export default db;