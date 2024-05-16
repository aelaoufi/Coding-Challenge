import { Document, Model } from "mongoose";
import * as Mongoose from "mongoose";

const postSchema = new Mongoose.Schema({
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

// const PostModel: IBlogModel = Mongoose.model<IBlogDocument>("post", postSchema);

const PostModel: IBlogModel =
  Mongoose.models.post || Mongoose.model<IBlogDocument>("blogs", postSchema);

export default PostModel;