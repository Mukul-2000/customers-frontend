// import { AnyMap } from "immer/dist/internal";
// import React, { useEffect, useState } from "react";
import { Pagination, Table } from "react-bootstrap";
import Customers from "../../view/section/customers";
// import { IoTrashBinSharp } from "react-icons/io5";
import { FontBold } from "../Text/TableText.format";
import "./table.css";
// import moment from "moment";

interface ITableData {
  tableData: any;
  
}

export default function AllCustomersTable(
  props: ITableData
) {
  
  return(
      <>
        <Customers
          customers={props.tableData || []}
          // search={props.searchKeyword || ""}
        />
      </>
  )
}
