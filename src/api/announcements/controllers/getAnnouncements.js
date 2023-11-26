const Announcement = require("../../../models/Announcement");

const getAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find();
        res.status(200).send(announcements);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

module.exports = getAnnouncements;