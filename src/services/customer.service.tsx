// import { url } from "inspector";
import url from "../api/urls";
import makeRequest from "../api/makeRequest";
import { MethodsEnum } from "../enum/methods.enum";

export class CustomerService{
    static async getAllCustomers(){
        return await makeRequest(`${url.getAllCustomers}`, MethodsEnum.GET)
    }

    static async getCustomerDetails(customerId: any){
        return await makeRequest(url.getCustomerDetails+customerId, MethodsEnum.GET)
    }

    static async onRemoveCustomer(customerId: any){
        return await makeRequest(url.removeCustomer+customerId, MethodsEnum.DELETE)
    }

    static async onAddCustomer(payload: any){
        return await makeRequest(url.addCustomer, MethodsEnum.POST, payload)
    }

    static async editCustomer(payload: any){
        return await makeRequest(url.editCustomer+payload?.id, MethodsEnum.PUT, payload?.data)
    }
}