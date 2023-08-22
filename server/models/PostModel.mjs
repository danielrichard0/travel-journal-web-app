import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    imgUrl: {
        type: String,
        required: [true, "ImgUrl is required"],
    },
    title: {
        type: String,
        required: [true, "title is required"],
    },
    location: {
        type: String,
        required : [true, "location is required"],
    },
    description: {
        type: String,
        required: [true, "description is required"]
    },
    date: {
        type: Date,
        required: [true, "date is required"],
    },
    userId: {
        type: String,
        required: [true, "userId is required"],
    }
});

const Post = mongoose.model('post', postSchema)

export default Post