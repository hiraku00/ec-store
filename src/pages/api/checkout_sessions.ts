import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-08-16",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { cart } = req.body;
    if (!cart || !Array.isArray(cart)) {
      return res.status(400).json({ error: "Invalid cart" });
    }
    const line_items = cart.map((item: any) => ({
      price_data: {
        currency: "jpy",
        product_data: {
          name: item.name,
          images: item.images ? [item.images[0]] : [],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${req.headers.origin}/cart?success=1`,
      cancel_url: `${req.headers.origin}/cart?canceled=1`,
    });
    res.status(200).json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: "Stripe error" });
  }
}
