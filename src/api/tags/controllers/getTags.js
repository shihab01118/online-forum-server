const Tag = require("../../../models/Tag");

const getTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).send(tags);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getTags;