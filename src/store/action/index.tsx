import makeRequest from "../../api/makeRequest";
import url from "../../api/urls";
import {
    ADD_CUSTOMER_FAILURE,
    ADD_CUSTOMER_INITIAL,
    ADD_CUSTOMER_SUCCESS,
    CHANGE_INPUT,
    FETCH_CUSTOMERS_INITIAL,
    FETCH_CUSTOMER_SUCCESS,
    FETCH_CUSTOMER_FAILURE,
    CUSTOMER_INPUT_ERROR,
    ON_CUSTOMER_INPUT_CHANGE_MODE_TOGGLE
} from "../constants/customer";
import toast from "react-hot-toast";
import { RequstMethods } from "../../api/requestMethods";



const onFetchCustomersInitial = (payload?: object) => ({
    type: FETCH_CUSTOMERS_INITIAL,
    payload,
});
const onFetchCustomerSuccess = (payload?: object) => ({
    type: FETCH_CUSTOMER_SUCCESS,
    payload,
  });
const onFetchCustomerFailure = (payload?: object) => ({
    type: FETCH_CUSTOMER_FAILURE,
    payload,
  });
const onAddNewCustomerInitial = (payload?: object) => ({
type: ADD_CUSTOMER_INITIAL,
payload,
});
const onAddNewCustomerSuccess = (payload?: object) => ({
type: ADD_CUSTOMER_SUCCESS,
payload,
});
const onAddNewCustomerFailure = (payload?: object) => ({
type: ADD_CUSTOMER_FAILURE,
payload,
});

export function changeInput(payload: object) {
    return {
      type: CHANGE_INPUT,
      payload,
    };
}

export const onCustomerInputError = (payload: object) => {
    return {
      type: CUSTOMER_INPUT_ERROR,
      payload,
    };
  };

export const onFetchCustomers = (payload?: object) => {
    return async (dispatch: any) => {
      try {
        dispatch(onFetchCustomersInitial(payload));
  
        const { data } = await makeRequest(
          url.getAllCustomers,
          RequstMethods.GET,
          payload
        );
        dispatch(onFetchCustomerSuccess(data));
      } catch (error: any) {
        dispatch(onFetchCustomerFailure(error));
        toast.error(error.message || "Failed to fetch Customers.");
      }
    };
  };

export const onAddCustomers = (payload: object) => {
    return async (dispatch: any) => {
      try {
        dispatch(onAddNewCustomerInitial(payload));
        const { data } = await makeRequest(
          url.addCustomer,
          RequstMethods.POST,
          payload
        );
        dispatch(onAddNewCustomerSuccess(data));
        dispatch(onFetchCustomers());
      } catch (error: any) {
        dispatch(onAddNewCustomerFailure({ message: error.message }));
        toast.error("Invalid Fields.");
      }
    };
};

export const onCustomerInputTogggle = (payload?: object) => {
    return {
      type: ON_CUSTOMER_INPUT_CHANGE_MODE_TOGGLE,
      payload,
    };
  };