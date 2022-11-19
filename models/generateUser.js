let generateUser =  function (bio, shipping, billing, contact, auth, interests) {
   let newUser = {
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
      charities: {
         interests: interests
      }
   };
   return newUser;
};

module.exports = generateUser;
