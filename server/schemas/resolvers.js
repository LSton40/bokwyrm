const { AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models');

const resolvers = {

    Query: {
        async me(_, { username }) {
            return await User.findOne({username})
        }
    },

    Mutation: {
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("We couldn't find any users with that email address.")
            }

            const correctPass = await user.isCorrectPassword(password);

            if (!correctPass) {
                throw new AuthenticationError('Password is incorrect with that email.');
            }

            const token = signToken(user);

            return { token, user };
        },

        addUser: async (_, { username, email, password }) => {
            const user = User.create({ username, email, password })
            const token = signToken(user);
            return { token, user }
        },

        saveBook: async (_, {bookId, authors, description, title, image, link}) => {
            return await User.findOneAndUpdate(
                {_id: bookId}, 
                {
                    $addToSet: { savedBooks: { 
                        authors, 
                        description, 
                        title, 
                        image, 
                        link
                        }
                    }
                }, 
                {
                    new: true, 
                    runValidators: true
                }
            );
        },

        removeBook: async (_, { userId, bookId }) => {
            return await User.findOneAndUpdate(
                { _id: userId }, 
                { $pull: { savedBooks: { _id: bookId } } }, 
                { new: true }
            )
        }
    }
}

module.exports = resolvers;