const Post = require("../../../models/Post");

const getPostByPopularity = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const size = parseInt(req.query.size) || 5;

    const sortedPosts = await Post.aggregate([
      {
        $addFields: {
          voteDifference: { $subtract: ["$upVote", "$downVote"] },
        },
      },
      {
        $sort: { voteDifference: -1 },
      },
    ])
      .skip(page * size)
      .limit(size);

    res.status(200).send(sortedPosts);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getPostByPopularity;
