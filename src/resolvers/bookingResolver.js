const bookingResolver = {
    Query: {
        bookingByUsername:async(_,{usernameBooking},{dataSources, userIdToken}) => {
                return await dataSources.petAPI.bookingByUsername(usernameBooking);
           
        },
        bookingById:async(_,{bookingId},{dataSources, userIdToken}) => {
            
            const booking = await dataSources.petAPI.bookingById(bookingId);
            
              return booking;
            
        }
    },
    Mutation: {
        createBooking: async(_,{booking},{dataSources}) => {
           
              return await dataSources-petAPI.createBooking(booking);

        },
        updateBooking: async(_,{booking},{dataSources, userIdToken}) => {
              return await dataSources.petAPI.updateBooking(booking);
      
        },
        deleteBooking: async(_,{bookingId},{dataSources, userIdToken}) => {
           
               return await dataSources.petAPI.deleteBooking(bookingId);
        }
    }
};
module.exports =  bookingResolver;