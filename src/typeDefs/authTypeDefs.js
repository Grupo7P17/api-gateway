const { gql } = require(`apollo-server`)

const authTypes = gql `
  type Tokens {
     refresh: String!
     access : String!
  }
  input SignUpInput {
      username : String!
      password: String!
      name: String!
      email: String!
      phone: Int!
  }
  input CredentialsInput {
    username: String!
    password: String!
  }
  
  type Access {
      access : String!
  }
  input Refresh {
    refresh:String!
   }

  type UserDetail {
      id: Int!
      username: String!
      name: String!
      email: String!
      phone: Int!
  }
  input UserUpdate{
      id : Int!
      name : String!
      password: String!
      email: String!
      phone: Int!
  }

  type Query{
      userDetailById(userId: Int!) : UserDetail!
  }
  type Mutation{
    signUpUser(userInput:SignUpInput)   :Tokens!
    logIn(credentials:CredentialsInput!):Tokens!
    refreshToken(token:Refresh!)        :Access!
    updateUser(user:UserUpdate!)        :UserDetail!
    deleteUser(userId:Int!)             :String!

  }
`; 

module.exports = authTypes;