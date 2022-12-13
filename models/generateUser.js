let generateUser =  function (bio, shipping, billing, contact, auth) {
   let newUser = {
      username: auth.username,
      bio: bio,
      address: {
         shipping: {
            num: shipping.streetNumber,
            street: shipping.streetName,
            city: shipping.city,
            state: shipping.state,
         },
         billing: {
            num: billing.streetNumber,
            street: billing.streetName,
            city: billing.city,
            state: billing.state,
            sameAsShipping: billing.sameAsShipping
         }
      },
      contact: contact,
   };
   return newUser;
};

module.exports = generateUser;
