import gql from "graphql-tag";

// Query to fetch user data and saved book data for 'SavedBooks.js'
export const FETCH_USER_DATA = gql`
  {
    getUserData {
      _id
      username
      email
      totalBooks
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