require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRECT_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
  } catch (error) {}
};
