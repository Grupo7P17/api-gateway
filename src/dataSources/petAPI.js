const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig       = require('../server');

class PetAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.petAPIurl;
    }
    async createPet(pet){
        pet = new Object(JSON.parse(JSON.stringify(pet)));
        return await this.post('/pet', pet);
    }
    async getPet(username) {

        let response = null;

        try {

            response = await this.get(`/pet/${username}`);
            
        } catch (error) {

            //TODO: Handler error response

            // if (error.extensions && error.extensions.response) {

            //     const resp = error.extensions.response;

            //     response = {
            //         code: resp.status,
            //         status: resp.statusText,
            //         message: resp.body
            //     };
                
            // } else {

            //     response = {
            //         message: error.message
            //     };

            // }
            
        }

        return response;

    }

    async deletePet(username){
        return await this.delete(`/pet/delete/${username}`);

    }
    async updatePet(pet, username){
        pet = new Object(JSON.parse(JSON.stringify(pet)));
        return await this.put(`/pet/update/${username}`,pet);
    }
    async createBooking(booking){
        booking = new Object(JSON.parse(JSON.stringify(booking)));
        return await this.post('/Booking', booking);
    }
    async bookingByUsername(username){
        return await this.get(`/Booking/${username}`);
    }
    async bookingById(bookingId){
        return await this.get(`/Booking/get/${bookingId}`);
    }
    async updateBooking(booking){
        booking = new Object(JSON.parse(JSON.stringify(booking)));
        return await this.put('/Booking/update',booking)
    }
    async deleteBooking(bookingId){
        return await this.delete(`/Booking/delete/${bookingId}`)
    }
    
}
module.exports = PetAPI;