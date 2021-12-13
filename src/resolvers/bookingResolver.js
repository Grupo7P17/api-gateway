const bookingResolver = {
    Query: {
        bookingByUsername:async(_,{username},{dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if(username == usernameToken)
                return await dataSources.petAPI.bookingByUsername(username);
            else
                return null;
        },
        bookingById:async(_,{bookingId},{dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            const booking = await dataSources.petAPI.bookingById(bookingId);
            if(booking.usernameBooking == usernameToken)
              return booking;
            else
              return null;
        }
    },
    Mutation: {
        createBooking: async(_,{booking},{dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if(booking.usernameBooking == usernameToken)
              return await dataSources-petAPI.createBooking(booking);
            else
              return null;

        },
        updateBooking: async(_,{booking},{dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            bookingusername = (await dataSources.petAPI.bookingById(booking.id)).usernameBooking;
            if(bookingusername == usernameToken)
              return await dataSources.petAPI.updateBooking(booking);
            else
              return null;
        },
        deleteBooking: async(_,{bookingId},{dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            bookingusername = (await dataSources.petAPI.bookingById(bookingid)).usernameBooking;
            if(bookingusername == usernameToken)
               return await dataSources.petAPI.deleteBooking(bookingId);
            else
               return null;
        }
    }
};
module.exports =  bookingResolver;