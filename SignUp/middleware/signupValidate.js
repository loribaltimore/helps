let { body, check, validationResult } = require('express-validator');
let CustomError = require('../../util/CustomError');

module.exports.signupValidators = [
  body('firstName').isAlpha().isLength({ min: 1, max: 10 }).blacklist('\\\/\[\]\.\*\{\}').escape().trim(),
  body('lastName').isAlpha().isLength({ min: 1, max: 10 }).blacklist('\\\/\[\]\.\*\{\}').escape().trim(),
  body('age').isNumeric().isLength({ min: 2, max: 2 }).blacklist('\\\/\[\]\.\*\{\}').escape().trim(),
  body('streetNumber').isNumeric().blacklist('\\\/\[\]\.\*\{\}').escape().trim(),
  body('streetName').isAlpha('en-US', {ignore: ' '}).blacklist('\\\/\[\]\.\*\{\}').escape().trim(),
  body('city').isAlpha('en-US', {ignore: ' '}).blacklist('\\\/\[\]\.\*\{\}').escape().trim(),
  body('phone').isNumeric().isLength({ min: 10, max: 10 }).blacklist('\\\/\[\]\.\*\{\}').escape().trim(),
  body('email').isEmail().blacklist('\\\/\[\]\.\*\{\}').escape().trim(),
  body('username').isAlphanumeric().blacklist('\\\/\[\]\.\*\{\}').escape().trim(),
  body('password').isStrongPassword().blacklist('\\\/\[\]\.\*\{\}').escape().trim(),
  body('billStreetNumber').isNumeric().blacklist('\\\/\[\]\.\*\{\}').escape().trim(),
  body('billStreetName').isAlpha('en-US', {ignore: ' '}).blacklist('\\\/\[\]\.\*\{\}').escape().trim(),
  body('billCity').isAlpha('en-US', {ignore: ' '}).blacklist('\\\/\[\]\.\*\{\}').escape().trim(),
];
    
module.exports.signupValidatorHandler = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new CustomError('balls', 404);
  };
  return next();
};


//make sure your user signup works completely now that validaiton is created
//make sure billing is working correctly.
///error handling
//route protection
//helmet..