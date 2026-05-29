// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   ButtonGroup,
//   Card,
//   Container,
// //   Pagination,
// } from "react-bootstrap";
// import toast from "react-hot-toast";
// // import CreateSessionModal from "../../../components/Modals/SessionModal";
// // import AllSessionTable from "../../../components/Table/Session";
// import AllCustomersTable from "../components/table/customers";
// import { CustomerService } from "../services/customer.service";
// import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
// import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import AddCustomerModal from "../components/modal/addCustomer";
// import { onCustomerInputTogggle, onFetchCustomers } from "../store/action/index";


// export default function CustomerDetails() {
//   const customers = useAppSelector((state) => state.customer.customerDetail);
//   const loader = useAppSelector((state) => state.customer.loading);
//   // const dispatch = useAppDispatch();
//   const [customerModal, setCustomerModal] = useState("");
//   const [customerData, setCustomerData] = useState<any>(undefined);
//   const navigate: any = useNavigate();
//   const dispatch = useAppDispatch();

//   const [toggle, setToggle] = useState(false);
//   useEffect(() => {
//     dispatch(onFetchCustomers());
//   }, []);

  
//   const getCustomersData = async () => {
    
//       await CustomerService.getAllCustomers().then(res => {
//         if (res.status === 200) {
//           setCustomerData(res.data)
//         }
//       })
//   }
//   useEffect(() => {
//     getCustomersData()
//   }, [])

//   return (
//     <>
//       <Container>
//         <Card className="mt-4">
//           <Card.Body>
//             <div className="d-flex justify-content-between align-items-center mb-3">
//             </div>
//             <div>
//             {/* <AddCustomerModal /> */}
//             </div>
//             <AllCustomersTable
//               tableData={customerData}
//             />
//           </Card.Body>
//         </Card>
//       </Container>
      
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import AllCustomersTable from "../components/table/customers";
import { CustomerService } from "../services/customer.service";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { useNavigate } from "react-router-dom";
import AddCustomerModal from "../components/modal/addCustomer";
import { onFetchCustomers } from "../store/action/index";
import AddNewCustomerModal from "../components/modal/newAddCustomer";

export default function CustomerDetails() {
  const customers = useAppSelector((state) => state.customer.customerDetail);
  const loader = useAppSelector((state) => state.customer.loading);
  const [customerData, setCustomerData] = useState<any>(undefined);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(onFetchCustomers());
  }, []);

  const getCustomersData = async () => {
    await CustomerService.getAllCustomers().then((res) => {
      if (res.status === 200) {
        setCustomerData(res.data);
      }
    });
  };

  useEffect(() => {
    getCustomersData();
  }, []);

  const handleCustomerAdded = () => {
    // Refresh the table after a new customer is added
    getCustomersData();
    dispatch(onFetchCustomers());
  };

  return (
    <>
      <Container>
        <Card className="mt-4">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-3">
              {/* <h5 className="mb-0">Customers</h5> */}
              <Button variant="primary" onClick={() => setShowModal(true)}>
                + Add Customer
              </Button>
            </div>

            <AllCustomersTable tableData={customerData} />
          </Card.Body>
        </Card>
      </Container>

      <AddNewCustomerModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onCustomerAdded={handleCustomerAdded}
      />
    </>
  );
}
