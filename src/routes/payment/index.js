const express = require("express");
const { createPaymentIntent } = require("../../api/payment/controllers");
const router = express.Router();

router.post("/create-payment-intent", createPaymentIntent);

module.exports = router;
