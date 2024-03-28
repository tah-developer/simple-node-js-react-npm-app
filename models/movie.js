import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { required: true, type: String },
  description: { required: true, type: String },
  releaseYear: { required: true, type: Number },
  genre: { required: true, type: String },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
