import React, { useEffect, useState } from "react";
// import { AdminService } from "../../../../services/admin.service";
// import { onFetchCompanies } from "../../../../store/actions/company";
import { useAppDispatch } from "../store/reduxHooks";
// import EditComapnyModal from "./EditCompanyModal";
// import UpdateCompanyModal from "./ViewCompanyModal";
import classes from "./index.module.css";
import toast from "react-hot-toast";
import { CustomerService } from "../services/customer.service";
import { onFetchCustomers } from "../store/action/index";
import EditCustomerModal from "./editCustomerModal";


interface IViewCustomers {
  id: string 
  setToggle:any
  toggle: boolean
}

const ViewCustomers = (props: IViewCustomers) => {
  const [customer, setCustomer] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    billingAddress: "",
  });


  const dispatch = useAppDispatch();

  const close = () => {
    props.setToggle(false);
  };

  // const { id } = useParams();
  const id = props.id;
  const onFetchCustomer = async () => {
    await CustomerService.getCustomerDetails({ id })
      .then((res: any) => {
        if (res.status === 200) {
          const result = res?.data?.customer;
          setCustomer(result)
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const onFetchUpdatedCustomer = async () => {

    const data = { firstName: customer.firstName, lastName: customer.lastName, phone: customer.phone, email: customer.email, billingAddress: customer.billingAddress };
    // delete data._id;
    // delete data.userRole;

    await CustomerService.editCustomer( {id, data} )
      .then((res: any) => {
        if (res?.status === 200) {
          toast.success("Updated")
          onFetchCustomer();
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onFetchCustomer();
  }, []);

//   const onCheck = (e: any) => {
//     setCustomer({
//     });
//   };
  const onChangeValue = (e: any) => {
    setCustomer({  [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    onFetchUpdatedCustomer();
    dispatch(onFetchCustomers());
    props.setToggle(false);
  };

  const onCancel = () => {
    props.setToggle(false);
  };

  return (
    <>
      {
        <EditCustomerModal
          show={props.toggle}
          onChangeValue={onChangeValue}
          customer={customer}
          close={close}
          editCustomerClass={classes.checkStatus}
          customerInputButtonsClass={classes.customerInputButtons}
        //   onCheck={onCheck}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      }
    </>
  );
};

export default ViewCustomers;
