import React from "react";
import { Button, Form } from "react-bootstrap";
import FormInput from "../UI/formInput";
import SideModal from "../sidemodal/index";
import { onCustomerInputTogggle } from "../../store/action/index";
import { useAppDispatch } from "../../store/reduxHooks";

interface ICreateCustomer {
  show: boolean;
  onChangeValue: any;
  customer: any;
  close: any;
  editCustomerClass?: any;
  customerInputButtonsClass: any;
//   onCheck: any;
  onSubmit: any;
  onCancel: any;
}
const CreateCustomerModal = ({
    show,
    onChangeValue,
    customer,
    editCustomerClass,
    close,
    customerInputButtonsClass,
    //   onCheck,
    onSubmit,
    onCancel,
}: ICreateCustomer) => {
    console.log(customer)
    const dispatch = useAppDispatch()
  return (
    <>
        {/* <Button
        variant="primary"
        onClick={() => dispatch(onCustomerInputTogggle())}
        size="sm"
        className="xcn-button"
      >
        Add Customer
      </Button> */}
        <SideModal
      show={show}
      handleClose={close}
      title="Create customer "
      body={
        <>
          <Form>
            <FormInput
              classes="mb-3"
              onChange={(e: any) => onChangeValue(e)}
              value={customer?.firstName}
              identifier="firstName"
              label="Customer First Name"
              readonly={true}
              disabled={true}
              type="text"
            />

             <FormInput
              classes="mb-3"
              onChange={(e: any) => onChangeValue(e)}
              value={customer?.lastName}
              identifier="lastName"
              label="Customer Last Name"
              readonly={true}
              disabled={true}
              type="text"
            />
            <FormInput
              classes="mb-3"
              onChange={(e: any) => onChangeValue(e)}
              value={customer?.email}
              identifier="email"
              label=" Email"
              type="email"
            />
            <FormInput
              classes="mb-3"
              onChange={(e: any) => onChangeValue(e)}
              value={customer?.phone || 0}
              identifier="phone"
              label="phone"
              type="number"
            />

            <FormInput
              classes="mb-3"
              onChange={(e: any) => onChangeValue(e)}
              value={customer?.billingAddress || ""}
              identifier="billingAddress"
              label="billing address"
              type="text"
            />
            
          </Form>
        </>
      }
      footer={
        <div className={customerInputButtonsClass}>
          <Button onClick={onSubmit}>Submit</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </div>
      }
    />
    </>
    
  );
};

export default CreateCustomerModal;
