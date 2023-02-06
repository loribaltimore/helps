const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { v4: uuidv4 } = require('uuid');

module.exports.checkoutPost = async (req, res, next) => {
    let { cart, toPool } = req.body;
  console.log('THIS SHOULD BE CART');
  console.log(toPool);
  console.log(req.headers.origin);

  if (!toPool) {
    req.session.toQueueID = uuidv4();
  };

      if (req.method === 'POST') {
        try {
          // Create Checkout Sessions from body params.
          const session = await stripe.checkout.sessions.create({
              line_items: cart.map(function (element, index) {
                      let split = element.split(':');
                   return {
                        price: split[0],
                        quantity: split[1],
                      }
                  }),
            mode: 'payment',
            success_url:
              toPool ?
                `${req.headers.origin}/home?success=true&toPool=${toPool}`
                :
                `${req.headers.origin}/home?success=true&toQueue=${req.session.toQueueID}`,
            cancel_url: `${req.headers.origin}/home?canceled=true`,
          });
          res.redirect(303, session.url);
        } catch (err) {
          res.status(err.statusCode || 500).json(err.message);
        }
      } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
      }

};


// make it so coin amount goes into cart => stripe => reflects on checkout
///cart total and coin rounded to nearest 100th;