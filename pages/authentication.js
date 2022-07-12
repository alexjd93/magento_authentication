import { useFormik } from "formik"
import customerAPI from "../modules/customer/api/customerAPI"
import {GET_CUSTOMER_TOKEN_BY_SLUG} from '../Schema/customer'
import { useMutation } from "@apollo/client"
import productAPI from "../modules/customer/api/productAPI"

function Authentication() {
  const [generateCustomerToken, {error}] = useMutation(GET_CUSTOMER_TOKEN_BY_SLUG);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
        // productAPI.getProductBySlug('test')
        generateCustomerToken({
          variables:{
            email:"john.doe@example.com",
            password: "b1b2b3l@w+"
          }
        })
        // customerAPI.getCustomer('john.doe@example.com','b1b2b3l@w+');
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

export default Authentication;
