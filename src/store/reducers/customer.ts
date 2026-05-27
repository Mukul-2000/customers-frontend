import { ICustomerState } from "./interface";
import { IAction } from "../action";
import * as actionTypes from "../constants/customer";

const initialState: ICustomerState = {
  customerInput: {},
  customerInputErrors: {},
  addEditCustomerLoader: false,
  customerDetail: {},
  loading: false,
  isCustomerOnInputMode: false,
  activeCustomer: {}
};


const customerReducer = (state = initialState, action: IAction) => {
  if (action.type === actionTypes.FETCH_CUSTOMER_INITIAL) {
    return {
      ...state,
      customerDetail: {},
      loading: true,
    };
  }
  if (action.type === actionTypes.FETCH_CUSTOMER_SUCCESS) {
    return {
      ...state,
      customerDetail: action.payload?.userData || {},
      loading: false,
    };
  }

  if (action.type === actionTypes.FETCH_CUSTOMER_FAILURE) {
    return {
      ...state,
      customerDetail: {},
      loading: false,
    };
  }

  if (action.type === actionTypes.ADD_CUSTOMER_INITIAL) {
    return {
      ...state,
      addEditCustomerLoader: true,
      customerInputErrors: {},
    };
  }
  if (action.type === actionTypes.ADD_CUSTOMER_SUCCESS) {
    return {
      ...state,
      addEditCustomerLoader: false,
      customerInput: action.payload || {},
      customerInputErrors: {},
      isCustomerOnInputMode: false,
    };
  }
  if (action.type === actionTypes.ADD_CUSTOMER_FAILURE) {
    return {
      ...state,
      addEditCustomerLoader: false,
    };
  }

  if (action.type === actionTypes.ON_CUSTOMER_INPUT_CHANGE_MODE_TOGGLE) {
    return {
      ...state,
      isCustomerOnInputMode: !state.isCustomerOnInputMode,
      customerInput: action?.payload?.isEdit ? { ...state.activeCustomer } : {},
    };
  }

  if (action.type === actionTypes.CUSTOMER_INPUT_ERROR) {
    return {
      ...state,
      customerInputErrors: { ...state.customerInputErrors, ...action.payload },
    };
  }

  if (action.type === actionTypes.UPDATE_CUSTOMER_INITIAL) {
    return {
      ...state,
      addEditCustomerLoader: true,
      customerInputErrors: {},
    };
  }
  if (action.type === actionTypes.UPDATE_CUSTOMER_SUCCESS) {
    return {
      ...state,
      addEditCustomerLoader: false,
      customerInput: action.payload || {},
      customerInputErrors: {},
      isCustomerOnInputMode: false,
    };
  }
  if (action.type === actionTypes.UPDATE_CUSTOMER_FAILURE) {
    return {
      ...state,
      addEditCustomerLoader: false,
    };
  }

  return state;
};

export default customerReducer;
