const {gql} = require('apollo-server');

serviceTypes = gql `
    type Service{
        id : Int!
        service: String!
        cost: Int!
        days: Int !
        category: String!
    }
    
    input ServiceInput{
        service: String!
        cost: Int!
        days: Int !
        category: String!
    }
    input ServiceUpdate{
        service: String!
        cost: Int!
        days: Int !
        category: String!
    }
    extend type Query{
        servicesById(serviceId: Int!) : Service!
        services : [Service] 
    }
    extend type Mutation{
        createService(service: ServiceInput!) : Service!
        updateService(service : ServiceUpdate!) : Service!
        deleteService(serviceId: Int!): String
    }

`;

module.exports = serviceTypes;