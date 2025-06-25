const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const { addOns } = JSON.parse(event.body);
  console.log('stripe')

  // Map frontend addOn IDs to Stripe Price IDs (from your Stripe dashboard)
  const priceMap = {
    express: 'price_1RbwifP9nARwRH7i8gTzdZ3n', // replace with your actual Price ID
    gallery: 'price_1RbwlWP9nARwRH7iPjpO045N',
    reviews: 'price_1RbwnRP9nARwRH7i909hxrYv',
    businessProfile: 'price_1RcDt1P9nARwRH7i2iZRvGF3',
    seo: 'price_1RcDtYP9nARwRH7ihfP1AIs9',
    socialMedia: 'price_1RcDu6P9nARwRH7i7C6saABT',
    domain: 'price_1RcDvJP9nARwRH7i9UNV99yY',
    logo: 'price_1RcDw8P9nARwRH7ioiyWG0HP',
    graphics: 'price_1RcDwmP9nARwRH7igftEjyHf',
  };

// Test Data 
//   const priceMap = {
//     express: 'price_1Rcpzc03WGniZBk1x4FKm8V4', // replace with your actual Price ID
//     gallery: 'price_1Rcr4D03WGniZBk1F4TzTx6D',
//     reviews: 'price_1Rcr4j03WGniZBk15s5UTrMf',
//     businessProfile: 'price_1Rcr5G03WGniZBk1QkJwGreH',
//     seo: 'price_1Rcr5k03WGniZBk1UIlKyzvs',
//     socialMedia: 'price_1Rcr6Y03WGniZBk1OnODZ1Hi',
//     domain: 'price_1Rcr7303WGniZBk19Peihve9',
//     logo: 'price_1Rcr7d03WGniZBk1P52hf8Wv',
//     graphics: 'price_1Rcr8903WGniZBk1yPvOq199',
//   };

  // Always include the base Express plan
  const line_items = [
    { price: priceMap.express, quantity: 1 },
    ...addOns.map((id) => ({
      price: priceMap[id],
      quantity: 1,
    })),
  ];

// const line_items = [
//   { price: 'price_1RbwifP9nARwRH7i8gTzdZ3n', quantity: 1 }
// ];


  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://ghoststackdesigns.com/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://ghoststackdesigns.com/cancel',
    });
    

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
