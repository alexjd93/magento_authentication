import client from '../../../utils/apollo-client'
import { GET_PRODUCT_BY_SLUG } from '../../../Schema/product';

const productAPI = {
    getProductBySlug: async (slug) => {
        console.log("test")
      const { data } = await client.query({
        query: GET_PRODUCT_BY_SLUG,
        variables: {
          slug: slug.split('.')[0]
        }
      });
      console.log(data)
      return data.products.items[0];
    }
  };
  
  export default productAPI;
  