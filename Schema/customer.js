import { gql } from '@apollo/client';

export const GET_CUSTOMER_TOKEN_BY_SLUG = gql `
mutation generateCustomerToken($email: String!, $password: String!) {
    generateCustomerToken(email:$email , password:$password ) {
      token
    }
  }
`