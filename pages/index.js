import { useFormik } from "formik"
import Test from "../modules/customer/api/customerAPI"
import { gql } from '@apollo/client';
import { useMutation,useQuery } from "@apollo/client"


const GET_PRODUCTS = gql `
{
  products(search: "") {
    items {
      name
    }
  }
}
`

export default function Home() {
    const {loading, error, data} = useQuery(GET_PRODUCTS)
    console.log(data);
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        // console.log(customerAPI);
      },
    });
    return (
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
    );
  
}
