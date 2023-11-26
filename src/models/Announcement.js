const mongoose = require("mongoose");
const { Schema } = mongoose;

const announcementSchema = new Schema({
  name: String,
  img: String,
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Announcement = mongoose.model("Announcement", announcementSchema);

module.exports = Announcement;