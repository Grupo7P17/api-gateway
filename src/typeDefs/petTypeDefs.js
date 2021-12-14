const {gql} = require('apollo-server');

petTypes = gql `
    union petUnionValidate = Pet | PetError

    type Pet {
        username: String!
        name: String!
        breed: String!
        age: Int!
    }

    type PetError {
        message: String!
        code: Int!
        status: String!
    }

    input PetInput{
        username: String!
        name: String!
        breed: String!
        age: Int!
    }
    input PetUpdate{
        name: String!
        breed: String!
        age: Int!
    }
    extend type Query{
        petByUsername(username: String!): Pet
    }
    extend type Mutation{
        createPet(pet: PetInput): Pet!
        updatePet(pet: PetUpdate): Pet!
        deletePet(petUsername: String!): String

    }

`;

module.exports = petTypes;
