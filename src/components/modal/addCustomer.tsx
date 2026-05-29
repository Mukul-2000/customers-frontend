import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";
import Validation from "../../helper/validation";
import { CustomerService } from "../../services/customer.service";
// import FormInput from "../../../../Components/UI/FormInput";
// import SideModal from "../../../../Components/UI/SideModal/SideModal";
// import Validation from "../../../../helper/Validations";
import {
  changeInput,
  onAddCustomers,
  onCustomerInputError,
  onCustomerInputTogggle,
  onFetchCustomers,
} from "../../store/action/index";
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";
import SideModal from "../sidemodal";
import FormInput from "../UI/formInput";
import CreateCustomerModal from "./createCustomerModel";
// import classes from "./index.module.css";



interface IViewCustomer {
    // id: string 
    // setToggle:any
    // toggle: boolean
 
}

const AddCustomerModal = () => {
  const inputData = useAppSelector((state) => state.customer.customerInput);
  const errors = useAppSelector((state) => state.customer.customerInputErrors);
  const loader = useAppSelector((state) => state.customer.addEditCustomerLoader);
//   const customerData = useAppSelector((state) => state.customer.customerInput);
//   const [customerData, setCustomerData] = useState<any>({})
//   const [inputData, setInputData] = useState<any>({})
  const [customer, setCustomer] = useState<any>({
    firstName: "",
    lastname: "",
    email: "",
    billingAddress: "",
    phone: 0,
    // blocked: false,
  });



  

  const isOpenDialog = useAppSelector(
    (state) => state.customer.isCustomerOnInputMode
  );
  const dispatch = useAppDispatch();

  const onChangeValue = (e: any) => {
    setCustomer({ [e.target.name]: e.target.value });
  };

//   const onFetchCustomer = async () => {
//     await CustomerService.getCustomerDetails( )
//       .then((res: any) => {
//         if (res.status === 200) {
//           const result = res?.data?.user;
//           setCustomer(result)
//         }
//       })
//       .catch((error: any) => {
//         console.log(error);
//       });
//   };
  const { email, firstName, lastName, billingAddress, phone } = inputData;

  const inputDataCustomer = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    billingAddress: billingAddress,
    phone: phone
  };

  const onSubmit = () => {

   
        dispatch(onAddCustomers(inputDataCustomer));
//   }
  };
    

  return (
    <>
      <Button
        variant="primary"
        onClick={() => dispatch(onCustomerInputTogggle())}
        size="sm"
        className="xcn-button"
      >
        Add Customer
      </Button>


      <SideModal
        show={isOpenDialog}
        handleClose={() => dispatch(onCustomerInputTogggle())}
        title="Add Customer"
        body={
          <>
            <Form>
              <FormInput
                classes="mb-3"
                onChange={(e: HTMLElement) => onChangeValue(e)}
                value={firstName}
                identifier="firstName"
                error={errors.firstName}
                label="Customer First Name"
                errMessage="Invalid First Name"
                readonly={loader}
              />
              <FormInput
                classes="mb-3"
                onChange={(e: HTMLElement) => onChangeValue(e)}
                value={lastName}
                identifier="lastName"
                error={errors.lastName}
                label="Customer Last Name"
                errMessage="Invalid Last Name"
                readonly={loader}
              />
              <FormInput
                classes="mb-3"
                onChange={(e: HTMLElement) => onChangeValue(e)}
                value={email}
                identifier="email"
                error={errors.email}
                label="Customer Email"
                errMessage="Invalid Email"
                readonly={loader}
              />

              <FormInput
                classes="mb-3"
                onChange={(e: HTMLElement) => onChangeValue(e)}
                value={phone}
                identifier="phone"
                error={errors.phone}
                label="Customer Phone"
                errMessage="Invalid Phone"
                readonly={loader}
                // type="number"
              />
              <FormInput
                classes="mb-3"
                onChange={(e: HTMLElement) => onChangeValue(e)}
                value={billingAddress}
                identifier="billingAddress"
                error={errors.billingAddress}
                label="Billing Address"
                errMessage="Must be greater than 0"
                readonly={loader}
                // type="number"
              />
            </Form>

          </>
        }
        footer={
          <>
            <Button variant="primary" onClick={onSubmit}>
              Create
            </Button>
          </>
        }
      />
    </> 
  );
};

export default AddCustomerModal;