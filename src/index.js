const { ApolloServer} = require('apollo-server');

const typeDefs        = require('./typeDefs');
const resolvers       = require('./resolvers');
const authentication  = require('./utils/authentication');
const AuthAPI         = require('./dataSources/authAPI');
const serviceAPI      = require('./dataSources/serviceAPI');
const petAPI          = require('./dataSources/petAPI');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        AuthAPI: new AuthAPI(),
        serviceAPI: new serviceAPI(),
        petAPI: new petAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4001).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
}
);

