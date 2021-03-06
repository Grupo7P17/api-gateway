const userResolver = {
    Query: {
        userDetailById: async (_, {userId}, {dataSources}) =>{
            return await dataSources.authAPI.getUser(userId);
        }
    },
    Mutation: {
        signUpUser: async (_, {userInput}, {dataSources}) =>{
            return await dataSources.authAPI.createUser(userInput);
        },
        logIn: async (_, {credentials}, {dataSources}) => {
            return await dataSources.authAPI.authRequest(credentials);
        },
        refreshToken: async (_, {refresh}, {dataSources}) =>{
            return await dataSources.authAPI.refreshToken(refresh);
        },
        updateUser: async (_, {userInput}, {dataSources, userIdToken}) =>{
               return await dataSources.authAPI.updateUser(userInput);
        },
        deleteUser: async (_, {userId}, {dataSources, userIdToken}) =>{

              return await dataSources.authAPI.deleteUser( userId);
        }
    }
}
module.exports = userResolver;