const Comment = require("../../../models/Comment");

const getAllCommentsCount = async (req, res) => {
    try {
        const count = await Comment.countDocuments();
        res.status(200).send({ count });
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
}

module.exports = getAllCommentsCount;