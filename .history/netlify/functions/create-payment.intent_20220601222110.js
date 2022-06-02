require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRECT_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: "usd",
      payment_method_types: "pm_card_visa",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};