import React from "react";
import { useNavigate } from "react-router";
import CardBasic from "../../components/Card/card.basic";
import { Image } from "react-bootstrap";
import { BiMailSend, BiPhone } from "react-icons/bi";

interface ICustomers {
//   search: string;
  customers: any[]
}

export default function Customers(props: ICustomers) {
  const navigate = useNavigate();

  return (
    <>
      {props.customers.length > 0 ?
        <>
          <div className="d-flex justify-content-between align-items-center my-4">
            <h5 className="fw-bold fs-grey">Customers</h5>
          </div>

          <div className="d-flex justify-content-start overflow-x-scroll">
            {
              props.customers && props.customers.length > 0 && props.customers.map((customer: any) => {
                return (<>
                  <div className="mx-1 p-3 cursor-pointer">
                    <CardBasic
                      body={
                        <div onClick={() =>
                          navigate(
                            `/customer/${customer?._id}`
                          )
                        }>
                          <div className="d-flex justify-content-between">
                            {/* <Image
                              src={student.avatar || "NA"}
                              className="img-small-circled"
                            /> */}
                            <span className="fs-10 fs-dhunprimary fw-bold">
                              ID: {customer?._id || "NA"}
                            </span>
                          </div>

                          <div className="mt-2">
                            <span className="fs-grey fw-bold">
                              {customer?.firstName || "NA"} {""}
                              {customer?.lastName || "NA"}
                            </span>
                          </div>

                          <div className="fs-10 text-muted">
                            <div>
                              <BiMailSend /> {customer.email}
                            </div>
                            <div>
                              <BiPhone /> {customer.phone}
                            </div>
                          </div>
                        </div>
                      }
                    />
                  </div>
                </>)
              })
            }
          </div>
        </> : " "
      }
    </>
  )

}