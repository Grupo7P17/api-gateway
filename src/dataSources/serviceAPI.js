const {RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class ServiceAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = serverConfig.serviceAPIurl;
    }

    async createService ( service ) {

        const _service = new Object(JSON.parse(JSON.stringify(service)));

        const response = await this.post('/service/create/', _service);

        return response;

    }

    async getService ( serviceId ) {

        console.log( serviceId );

        const response = await this.get(`/service/${serviceId}`);

        return response;

    }

    async getServices(){
        return await this.get('/services/');
    }
    async UpdateService(service, serviceId){
        service = new Object(JSON.parse(JSON.stringify(service)));
        return await this.put(`/service/update/${serviceId}`,service);
    }
    async deleteService(serviceId){
        return await this.delete(`/service/remove/${serviceId}`);
    }

}
module.exports = ServiceAPI;