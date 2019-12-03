
const User = require("./User");

module.exports = {


    Query: {
        // retornado 'users'
        users: () => User.find(), 

        // retornando o usuário [ por ordem de array: 0, 1, 2... ]
        user: (_, { id }) => User.findById(id)

    },

    Mutation: {
        createUser: (_, { name, email }) => User.create({ name, email }),
    },

};