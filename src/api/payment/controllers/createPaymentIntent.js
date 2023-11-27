require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (req, res) => {
  try {
    const { money } = req.body;
    const amount = parseInt(money) * 100;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = createPaymentIntent;
