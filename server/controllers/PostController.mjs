import Post from "../models/PostModel.mjs"

const ViewPost = async (req, res, next) => {
    try {
        let userId = req.query.userId; // Use req.query to access the query parameter
        userId = userId.userId
        const posts = await Post.find({ userId }).exec();
        
        if (posts.length === 0) {
            return res.json({
                message: "This account doesn't have posts yet",
                status: false
            });
        }   
        
        res.status(200).json({ posts });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const UploadPost = async (req, res, next) => {
    try {
        const {imgUrl, title, date, location, description, userId} = req.body
        console.log(req.body);
        const post = await Post.create({ imgUrl, title, date, location, description, userId })
        res
            .status(200)
            .json({ message: "A post has been uploaded", success: true, post });
    } catch (error) {
        console.log(error);     
    }
}

export { ViewPost };
export { UploadPost }