const Announcement = require("../../../models/Announcement");

const saveAnnouncement = async (req, res) => {
  try {
    const announcement = req.body;
    console.log(announcement);
    const result = await Announcement.create(announcement);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = saveAnnouncement;
