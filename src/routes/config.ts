import Customer from "../components/customer";
import CustomerDetails from "../view";
import ICustomerRouter from "./interface";

export const Config: ICustomerRouter[] = [
    {
        path: "/",
        element: CustomerDetails
        // show: true,
        // name: "Customers"
        // icon: IoSearch,
    },

    {
        path: "/customer/:id",
        element: Customer
        // show: true,
        // name: "Customers"
        // icon: IoSearch,
    }
  ];
  