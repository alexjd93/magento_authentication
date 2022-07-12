import { gql } from '@apollo/client';

export const GET_PRODUCT_BY_SLUG = gql`
  query Product($slug: String!) {
    products(filter: { url_key: { eq: $slug } }) {
      items {
        name
        url_key
        thumbnail {
          url
        }
        image {
          url
        }
        sku
        options_container
      }
    }
  }
`;
