const authTypeDefs = require('./authTypeDefs');
const serviceTypeDefs = require('./serviceTypeDefs');
const petTypeDefs = require('./petTypeDefs');
const bookingTypeDefs = require('./bookingTypeDefs');

const schemasArray = [authTypeDefs, serviceTypeDefs, petTypeDefs, bookingTypeDefs]
module.exports = schemasArray;