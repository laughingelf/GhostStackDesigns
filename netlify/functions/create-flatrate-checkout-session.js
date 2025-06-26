const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const PRICE_LOOKUP = {
    express: 'price_1RbwifP9nARwRH7i8gTzdZ3n', 
    gallery: 'price_1RbwlWP9nARwRH7iPjpO045N',
    reviews: 'price_1RbwnRP9nARwRH7i909hxrYv',
    businessProfile: 'price_1RcDt1P9nARwRH7i2iZRvGF3',
    seo: 'price_1RcDtYP9nARwRH7ihfP1AIs9',
    socialMedia: 'price_1RcDu6P9nARwRH7i7C6saABT',
    domain: 'price_1RcDvJP9nARwRH7i9UNV99yY',
    logo: 'price_1RcDw8P9nARwRH7ioiyWG0HP',
    graphics: 'price_1RcDwmP9nARwRH7igftEjyHf',
  };

exports.handler = async (event) => {
  try {
    const itemObj = JSON.parse(event.body);
    const itemIds = itemObj.items
    // console.log('items --> ', itemIds)

    const line_items = itemIds.map((id) => ({
      price: PRICE_LOOKUP[id],
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items,
      success_url: "https://ghoststackdesigns.com/flat-rate-success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://ghoststackdesigns.com/cancel",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    console.error("Stripe session creation failed:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
