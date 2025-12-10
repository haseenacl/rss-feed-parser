import mongoose, { Schema, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  link: string;
  content?: string;
  pubDate?: string;
  source?: string;
}

const ArticleSchema: Schema = new Schema(
  {
    title: String,
    link: String,
    content: String,
    pubDate: String,
    source: String
  },
  { timestamps: true }
);

export default mongoose.model<IArticle>("Article", ArticleSchema);
