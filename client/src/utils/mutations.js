import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook(
        $userId: ID!, 
        $title: String!, 
        $authors: [String], 
        $description: String, 
        $image: String, 
        $link: URL
    ) {
        saveBook(
            userId: $userId, 
            title: $title, 
            authors: $authors, 
            description: $description, 
            image: $image, 
            link: $link
        ) {
            _id
            username
            savedBooks {
                _id
                title
                authors
                description
                image
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($userId: ID!, $bookId: ID!) {
        removeBook(userId: $userId, bookId: $bookId) {
            _id
            username
            savedBooks {
                _id
                title
                authors
                description
                image
                link
            }
        }
    }
`;