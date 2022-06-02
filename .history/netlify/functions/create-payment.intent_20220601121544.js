require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRECT_KEY);
