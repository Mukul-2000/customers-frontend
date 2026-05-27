import React from "react";
import { Button, Form } from "react-bootstrap";
import FormInput from "../components/UI/formInput";
import SideModal from "../components/sidemodal";

interface IEditCustomer {
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

const EditCustomerModal = ({
  show,
  onChangeValue,
  customer,
  editCustomerClass,
  close,
  customerInputButtonsClass,
//   onCheck,
  onSubmit,
  onCancel,
}: IEditCustomer) => {
  console.log(customer)
  return (
    <SideModal
      show={show}
      handleClose={close}
      title="Update Customer Details"
      body={
        <>
          <Form>
            <FormInput
              classes="mb-3"
              onChange={(e: any) => onChangeValue(e)}
              value={customer?.firstName}
              identifier="firstName"
              label="Customer First Name"
            //   readonly={true}
            //   disabled={true}
              type="text"
            />

            <FormInput
              classes="mb-3"
              onChange={(e: any) => onChangeValue(e)}
              value={customer?.lastName}
              identifier="lastName"
              label="Customer Last Name"
            //   readonly={true}
            //   disabled={true}
              type="text"
            />
              <FormInput
                classes="mb-3"
                onChange={(e: any) => onChangeValue(e)}
                value={customer?.billingAddress }
                identifier="billingAddress"
                label="Billing Address"
                type="text"
              />
            <FormInput
              classes="mb-3"
              onChange={(e: any) => onChangeValue(e)}
              value={customer?.email}
              identifier="email"
              label="Customer Email"
              type="text"
            />
            <FormInput
              classes="mb-3"
              onChange={(e: any) => onChangeValue(e)}
              value={customer?.phone }
              identifier="phone"
              label="phone"
              type="number"
            />

            {/* <div className={editCompanyClass}> */}
              {/* <Form.Label className="xcn-input-label text-secondary">
                Status
              </Form.Label> */}
              {/* <input
                className="mb-3"
                type="checkbox"
                onChange={onCheck}
                checked={company.blocked}
                placeholder="Status"
                style={{ marginLeft: "15rem" }}
              /> */}
            {/* </div> */}
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
  );
};

export default EditCustomerModal;
