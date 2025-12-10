import { Schema, model, Document } from "mongoose";

export interface IRssFeed extends Document {
  name: string;
  url: string;
}

const RssFeedSchema = new Schema<IRssFeed>({
  name: { type: String, required: true },
  url: { type: String, required: true }
});

const RssFeed = model<IRssFeed>("RssFeed", RssFeedSchema);
export default RssFeed;
