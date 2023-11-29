const Post = require("../../../models/Post");

const deletePostById = async (req, res) => {
    try {
        const postId = req.params.postId;
        const result = await Post.deleteOne({_id: postId});
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

module.exports = deletePostById;