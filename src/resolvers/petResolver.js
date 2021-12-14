const petResolver = {
    Query: {
        petByUsername: async(_, {username}, {dataSources}) => {

            const resolve = await dataSources.petAPI.getPet(username);

            console.log(resolve);

            return resolve;
        }
    },
    Mutation: {
        createPet: async(_, {pet}, {dataSources, userIdToken}) =>{
           
                return await dataSources.petAPI.createPet(pet);
        },
        updatePet: async(_, {pet, username}, {dataSources, userIdToken}) =>{
   
                return await dataSources.petAPI.updatePet(pet, username);

        },
        deletePet: async(_, {username}, {dataSources, userIdToken}) =>{

                return await dataSources.petAPI.deletePet(username);

        }

        
    }
};
module.exports = petResolver;