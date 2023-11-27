const User = require("../../../models/User");

const updateUserBadge = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const paymentSuccess = req.body.paymentSuccess;
    const transactionId = req.body.transactionId;

    if (paymentSuccess) {
      const updatedUser = await User.findOneAndUpdate(
        { email: userEmail },
        { $set: { badge: "gold", transactionId: transactionId } },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).send("User not found");
      }

      res.status(200).send(updatedUser);
    } else {
      res.status(400).send("Payment not successful");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = updateUserBadge;
