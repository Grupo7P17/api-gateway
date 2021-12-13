const {gql} = require('apollo-server');

bookingTypes = gql `
      type Booking{
          id : String!
          usernameBooking: String!
          checkIn: String!
          checkOut: String!
          cost: Int!
      }
      input BookingInput{
        usernameBooking: String!
        checkIn: String!
        checkOut: String!
        cost: Int!
    }
    input BookingUpdate{
        checkIn: String!
        checkOut: String!
        cost: Int!
    }
    extend type Query{
        bookingByUsername(username: String!) : [Booking]
        bookingById(bookingId:String!)    : Booking
    }
    extend type Mutation{
        createBooking(booking: BookingInput): Booking
        updateBooking(booking: BookingUpdate): Booking
        deleteBooking(bookingUsername: String!): String!

    }

`;

module.exports = bookingTypes;
