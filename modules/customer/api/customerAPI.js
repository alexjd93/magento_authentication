import client from '../../../utils/apollo-client'
import {GET_CUSTOMER_TOKEN_BY_SLUG, GET_CUSTOMER_DETAIL} from '../../../Schema/customer';

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
    },
    getCustomerDetail: async() => {
        const {data} = await client.query({
            query: GET_CUSTOMER_DETAIL
        })
    }
    // getCustomerDetail: async() => {
    //     const {data} = await client.query({
    //         query: GET_CUSTOMER_DETAIL
    //     })
    // }
    
}
const Test = 'test'

export default customerAPI
