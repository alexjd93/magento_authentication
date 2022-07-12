import { gql } from '@apollo/client';

export const GET_CUSTOMER_TOKEN_BY_SLUG = gql `
mutation {
    generateCustomerToken(email:"john.doe@example.com", password: "b1b2b3l@w+") {
      token
    }
  }
`