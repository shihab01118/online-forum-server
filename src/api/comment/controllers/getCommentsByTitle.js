const Comment = require("../../../models/Comment");

const getCommentsByTitle = async (req, res) => {
    try {
        const postTitle = req.params.postTitle;
        const commentsForPosts = await Comment.find({commentedPost: postTitle});
        res.status(200).send(commentsForPosts);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

module.exports = getCommentsByTitle;