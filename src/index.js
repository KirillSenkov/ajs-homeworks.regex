import Validator from './js/validator.js';
import formatPhone  from './js/phone.js';

const validator = new Validator();

console.log(validator.validateUsername());
console.log(formatPhone());