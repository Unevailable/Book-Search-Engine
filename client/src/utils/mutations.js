import gql from "graphql-tag";

// Define mutation for user login
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
  mutation saveBook($bookToSave: SavedBookInput!) {
  saveBook(book: $bookToSave) {
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
mutation RemoveBook($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    bookCount
    email
    savedBooks {
      _id
      authors
      bookId
      description
      forSale
      image
      link
      title
    }
    username
  }
}
`;
