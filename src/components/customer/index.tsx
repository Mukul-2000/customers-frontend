import React, { useEffect } from "react";
import { useParams } from "react-router";
import Breadcrumbs from "../../global/breadcrumbs/index";
import CustomerInfo from "./customerInfo";

// import StudentDetail from "./StudentDetail";
// import StudentTables from "./StudentTables";

const Customer = () => {
  const params: any = useParams();

  useEffect(() => { }, []);

  return (
    <>
    <div className="m-4">
      <Breadcrumbs
        links={[
          {
            url: "/customer",
            // name: "Home",
            active: false
          },
          {
            url: "#",
            // name: "Customer",
            active: true
          }
        ]}
      />
      

      <CustomerInfo studentId={params.id} />
      {/* <StudentTables id={params.id} /> */}
      </div>
    </>
  );
};

export default Customer;
