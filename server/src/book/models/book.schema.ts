import { Schema, Document } from 'mongoose';

const BookSchema = new Schema(
  {
    ID: {
      type: Number,
      required: true,
      unique: true,
      minlength: 1,
      maxlength: 25,
    },
    Tittle: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 200,
    },
    Rating: {
      type: Number,
      required: false,
    },
    Price: {
      type: Number,
      required: true,
    },
    Genre: {
      type: String,
      required: true,
    },

    Publish_Year: {
      type: Number,
      required: true,
    },
    Publisher: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    ISBN: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 25,
    },
    Image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    collection: 'books',
  },
);
export { BookSchema };
export interface Book extends Document {
  ID: number;
  Tittle: string;
  Rating: number;
  Price: number;
  Genre: string;
  Publish_Year: number;
  Publisher: string;
  Description: string;
  quantity: number;
  ISBN: string;
  Image: string;
    
}
