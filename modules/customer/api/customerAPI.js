import client from '../../../utils/apollo-client'
import {GET_CUSTOMER_TOKEN_BY_SLUG} from '../../../Schema/customer';

const customerAPI = {
    getCustomer: async(email,password) => {
        const {data} = await client.mutate({
            mutation: GET_CUSTOMER_TOKEN_BY_SLUG,
            variables:{
                email:"john.doe@example.com",
                password:"b1b2b3l@w+"
            }

        })
        console.log(data)
        return data
    }
}
const Test = 'test'

export default customerAPI
