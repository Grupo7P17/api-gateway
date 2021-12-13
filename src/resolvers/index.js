const authResolver    = require('./authResolver')
const serviceResolver = require('./serviceResolver')
const petResolver     = require('./petResolver')
const bookingResolver = require ('./bookingResolver')
const lodash          = require('lodash')


const resolvers = lodash.merge(authResolver, serviceResolver, petResolver, bookingResolver);
module.exports = resolvers;