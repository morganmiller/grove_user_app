import gql from 'graphql-tag';

// Is there a way to be more specific about inputs here?
// Example mutation, not currently used
export default gql`
  mutation Login($input: LoginMutationInput!){
    login(input: $input) {
      user {
        id
        email
      }
    }
  }
`;
