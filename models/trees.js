import mongoose from "mongoose";

const TreeSchema = new mongoose.Schema({
  numberPlanted: { required: true, type: Number },
});

const Tree = mongoose.model("Tree", TreeSchema);

export default Tree;
