import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Container,
//   Pagination,
} from "react-bootstrap";
import toast from "react-hot-toast";
// import CreateSessionModal from "../../../components/Modals/SessionModal";
// import AllSessionTable from "../../../components/Table/Session";
import AllCustomersTable from "../components/table/customers";
import { CustomerService } from "../services/customer.service";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import AddCustomerModal from "../components/modal/addCustomer";
import { onCustomerInputTogggle, onFetchCustomers } from "../store/action/index";

// import { AdminService } from "../../../services/admin.service";

export default function CustomerDetails() {
  const customers = useAppSelector((state) => state.customer.customerDetail);
  const loader = useAppSelector((state) => state.customer.loading);
  // const dispatch = useAppDispatch();
  const [customerModal, setCustomerModal] = useState("");
  const [customerData, setCustomerData] = useState<any>(undefined);
  const navigate: any = useNavigate();
  const dispatch = useAppDispatch();
  // const [companyModal, setCompanyModal] = useState("");

  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    dispatch(onFetchCustomers());
  }, []);

  
  const getCustomersData = async () => {
    
      await CustomerService.getAllCustomers().then(res => {
        if (res.status === 200) {
          setCustomerData(res.data)
        }
      })
  }
  // const thisFunction = async () => {
  //   dispatch(onCustomerInputTogggle)
  // }

  useEffect(() => {
    getCustomersData()
  }, [])

  return (
    <>
      <Container>
        <Card className="mt-4">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <Card.Title>Customers</Card.Title>
            </div>
            <div>
            {/* {toggle && <AddCustomerModal   ( id={customerModal} setToggle={setToggle} toggle={toggle}} */}
            <AddCustomerModal />
            {/* {toggle && (
              <AddCustomerModal id={customerModal} setToggle={setToggle} toggle={toggle} onClick={() => {
                setCustomerModal(data?.company._id);
                setToggle(!toggle);
              }} />
            )} */}
            {/* <Button
              variant="primary"
              onClick={thisFunction}
              //   <AddCustomerModal  />
              //   // setCustomerModal()
              //   // setCustomerModal();
              //   // setToggle(!toggle);
              // }}
              size="sm"
              className="xcn-button"
            >
              Add Customer
            </Button> */}
                    {/* /> */}
            {/* {toggle && (
              <ViewCustomers id={customerModal} setToggle={setToggle} toggle={toggle} />
            )} */}
            
            </div>
            <AllCustomersTable
              tableData={customerData}
           
            />
            
          </Card.Body>
        </Card>
      </Container>
      
    </>
  );
}
