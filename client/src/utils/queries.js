import gql from "graphql-tag";

// Query to fetch user data and saved book data for 'SavedBooks.js'
export const GET_ME = gql`
  {
    me {
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