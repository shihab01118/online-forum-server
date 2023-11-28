const ReportedComment = require("../../../models/ReportedComment");

const saveReportedComment = async (req, res) => {
  try {
    const reportedComment = req.body;
    const result = await ReportedComment.create(reportedComment);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = saveReportedComment;
