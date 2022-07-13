import { useFormik } from "formik"
import customerAPI from "../modules/customer/api/customerAPI"
import {GET_CUSTOMER_TOKEN_BY_SLUG} from '../Schema/customer'
import { useMutation,useQuery } from "@apollo/client"
import productAPI from "../modules/customer/api/productAPI"
import { setContext } from '@apollo/client/link/context';
import { gql } from '@apollo/client';


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const GET_PRODUCTS = gql `
{
  products(search: "") {
    items {
      name
    }
  }
}
`

function Authentication() {
  const [generateCustomerToken, {data,loading,error}] = useMutation(GET_CUSTOMER_TOKEN_BY_SLUG);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async(values) => {
        try{
         generateCustomerToken({
            variables:{
              email: values.email,
              password: values.password
            }
          })
          if(data){
            localStorage.setItem('token',data.generateCustomerToken.token)
          }
          console.log(data)
          // alert(error)
        }
        catch(err){
          console.log(err)
        }
        
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

    <label htmlFor="email">Password</label>
      <input
        id="password"
        name="password"
        type="pasword"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <button type="submit">Submit</button>
    </form>
    </div>
    
  );
}

export default Authentication;
