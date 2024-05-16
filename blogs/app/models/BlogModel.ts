import { Document, Model } from "mongoose";
import * as Mongoose from "mongoose";

const blogSchema = new Mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: false,
  },
});
//how our post looks like
interface IBlog {
  title: string;
  content: string;
}

interface IBlogDocument extends IBlog, Document {}
interface IBlogModel extends Model<IBlogDocument> {}

//postSchema->Document->Model

// const BlogModel: IBlogModel = Mongoose.model<IBlogDocument>("post", postSchema);

const BlogModel: IBlogModel =
  Mongoose.models.blogs || Mongoose.model<IBlogDocument>("blogs", blogSchema);

export default BlogModel;