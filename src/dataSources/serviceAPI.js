const {RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class ServiceAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = serverConfig.serviceAPIurl;
    }

    async createService(service){
        service = new Object(JSON.parse(JSON.stringify(service)));
        return await this.post('/service/create/', service);
    }
    async getService(serviceId){
        return await this.get(`/service/${serviceId}`);
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