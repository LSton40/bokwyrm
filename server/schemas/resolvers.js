const { AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models');

const resolvers = {

    Query: {
        me: async (_, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id})
            }
            throw new AuthenticationError('Log in!')
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
            const user = await User.create({ username, email, password })
            const token = signToken(user);
            console.log(user, token)
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