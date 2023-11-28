const Tag = require("../../../models/Tag");

const setTag = async (req, res) => {
  try {
    const tag = req.body;
    const result = await Tag.create(tag);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = setTag;