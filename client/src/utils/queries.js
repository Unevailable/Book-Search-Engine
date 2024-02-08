import gql from "graphql-tag";

// Query to fetch user data and saved book data for 'SavedBooks.js'
export const GET_ME = gql`
query Query {
  me {
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