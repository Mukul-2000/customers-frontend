import { useEffect, useState } from "react";
import CardBasic from "../../Card/card.basic";
// import StudentService from "../../../../../services/student.service";
import { AiFillCheckCircle } from "react-icons/ai";
import { Col, Image, Row } from "react-bootstrap";
import { CustomerService } from "../../../services/customer.service";
import {
  Button,
  ButtonGroup,
  Card,
  Container,
//   Pagination,
} from "react-bootstrap";
import { onFetchCustomers } from "../../../store/action/index";
import { useAppDispatch } from "../../../store/reduxHooks";
import ViewCustomers from "../../../view/viewCustomers";
// import UpdateCustomerModal from "../../modal/updateCustomer";


interface IDetailCustomer {
    customerId: string;
}

export default function InfoCustomer (props: IDetailCustomer) {
    const [customerDetails, setCustomerDetails] = useState<any>({})
  const [customerModal, setCustomerModal] = useState("");
  const [showCreateLink, setShowCreateLink] = useState(false);
  const dispatch = useAppDispatch();



    // const navigate = useNavigate();

    const getCustomerDetails = async () => {
      await CustomerService.getCustomerDetails(props.customerId).then(res => {
        if (res.status === 200) {
            setCustomerDetails(res.data)
        }
      })
    }

    const [toggle, setToggle] = useState(false);
      useEffect(() => {
      dispatch(onFetchCustomers());
    }, []);

    // const handleAdd = () => {
    //   setCustomerModal(true);
    // };
  
  
    const onMount = async () => {
        getCustomerDetails();
    }
  
    useEffect(() => {
      onMount();
    }, [])

    const onSubmit = async () => {
      console.log(customerDetails._id)
      await CustomerService.onRemoveCustomer(customerDetails._id).then(res => {
        if (res.status === 200) {
            setCustomerDetails(res.data)
        }
      })
    }
    return (
      <>
              <CardBasic
                body={
                  <>
                    <div className="d-flex justify-content-start">
                      {/* <div>
                        <Image src={studentDetails.avatar} height="150px" width="150px" />
                      </div> */}
                      <div className="ms-3 w-100">
                      <div >
                          <ButtonGroup size="sm">
                          <Button onClick={() =>{setCustomerModal(customerDetails._id);
                              setToggle(!toggle);
                            }}>
                            Update Customer
                          </Button>
                          </ButtonGroup>
                          {toggle && (
                           <ViewCustomers id={customerModal} setToggle={setToggle} toggle={toggle} />
                          )}
                      </div>
                       
                      
                        <div className="d-flex justify-content-between">
                       
                          <span className="fw-bold fs-grey fs-14">
                            {customerDetails.firstName + " " + customerDetails.lastName} <AiFillCheckCircle className="text-success" />
                            <div className="fs-12 fs-dhunprimary">
                              {customerDetails.email}
                            </div>
                          </span>
                          <span className="fs-grey fs-10 fw-bold">
                            {customerDetails._id}
                          </span>
                        </div>
                        <div className="mt-3 fs-14">
                          <h6 className="fs-grey"> Basic Details</h6>
                          <div className="bg-muted fs-12 w-100 rounded p-2">
                            <Row className="font-italic-imp">
                              <Col sm={6}>
                                Billing Address: {customerDetails.billingAddress || "N.A."}
                                <br/>
                                {/* Email: {studentDetails.isEmailConfirm ? "Verified" : "Not Verified"}
                                <br/>
                                Source: {studentDetails.utms ? studentDetails.utms.utm_source + " " + studentDetails.utms.utm_campaign : "N.A."}
                              </Col>
                              <Col sm={6}>
                                Demo Taken: {studentDetails.hasTakenDemo ? "Yes" : "No"}
                                <br />
                                Blocked: {studentDetails.isBlocked ? "Yes" : "No"} */}
                              </Col>
                            </Row>
                            <br />
                          </div>
                        </div>
                        <div>
                          <ButtonGroup size="sm">
                            <Button variant="danger" onClick={onSubmit}>
                              Delete Customer
                            </Button>
                          </ButtonGroup>
                      </div>
                      </div>
                    </div>
                    {/* <UpdateCustomerModal
                    /> */}
                  </>
                }
              />
      </> )
}