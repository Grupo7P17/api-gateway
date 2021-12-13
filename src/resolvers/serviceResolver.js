const serviceResolver = {
    Query: {
        servicesById: async (_, {serviceId}, {dataSources}) =>{
            return await dataSources.serviceAPI.getService(serviceId);
        },
        services: async (_, {}, {dataSources}) =>{
            return await dataSources.serviceAPI.getServices();
        }
    },
    Mutation: {
        createService: async(_, {service}, {dataSources}) => {
            return await dataSources.serviceAPI.createService(service);
        },
        updateService: async(_, {service, serviceId}, {dataSources}) => {
            return await dataSources.serviceAPI.updateService(service, serviceId);
        },
        deleteService: async(_, {serviceId}, {dataSources}) => {
            return await dataSources.serviceAPI.deleteService(serviceId);

        }
    }
};
module.exports = serviceResolver;