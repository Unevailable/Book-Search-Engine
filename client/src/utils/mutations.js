import gql from "graphql-tag";

// Define mutation for user login
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Updated mutation for adding a new user
export const ADD_USER = gql`
  mutation addUser($newUsername: String!, $newEmail: String!, $newPassword: String!) {
    addUser(newUsername: $newUsername, newEmail: $newEmail, newPassword: $newPassword) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          authors
          bookId
          image
          link
          title
          description
        }
      }
    }
  }
`;

// New mutation for saving a book
export const SAVE_BOOK = gql`
  mutation saveBook($bookToSave: InputBook!) {
    saveBook(bookToSave: $bookToSave) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

// New mutation for removing a book
export const REMOVE_BOOK = gql`
  mutation removeBook($bookIdToRemove: ID!) {
    removeBook(bookIdToRemove: $bookIdToRemove) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
