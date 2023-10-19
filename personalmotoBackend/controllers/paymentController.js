import express from "express";
import stripe from "../utils/stripe.js";

const checkout = async (req, res) => {
  const {
    firstName,
    lastName,
    address,
    postalCode,
    email,
    phoneNumber,
    toPay,
  } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "TopUp Funds",
              metadata: {
                firstName,
                lastName,
                address,
                postalCode,
                email,
                phoneNumber,
              },
            },
            unit_amount: toPay * 100,
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/payment/success",
      cancel_url: "http://localhost:3000/payment/fail",
    });
    res.status(201).json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: { message: error.message } });
  }
};

export default { checkout };
