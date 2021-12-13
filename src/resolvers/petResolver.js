const petResolver = {
    Query: {
        petByUsername: async(_, {username}, {dataSources}) =>{
                return await dataSources.petAPI.getPet(username);
        }
    },
    Mutation: {
        createPet: async(_, {pet}, {dataSources, userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if(username == usernameToken)
                return await dataSources.petAPI.createPet(pet);
            else
                return null;
        },
        updatePet: async(_, {pet, username}, {dataSources, userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if(username == usernameToken)
                return await dataSources.petAPI.updatePet(pet, username);
            else
                return null;
        },
        deletePet: async(_, {username}, {dataSources, userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if(username == usernameToken)
                return await dataSources.petAPI.deletePet(username);
            else
                return null;
        }

        
    }
};
module.exports = petResolver;