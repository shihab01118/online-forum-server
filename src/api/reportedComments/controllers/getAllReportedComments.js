const ReportedComment = require("../../../models/ReportedComment");

const getAllReportedComments = async (req, res) => {
  try {
    const allReportedComments = await ReportedComment.find();
    res.status(200).send(allReportedComments);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getAllReportedComments;
