import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
interface IBreadCrumbs {
  links: {
    url?: string
    active: boolean
    // name: string
  }[]
}

const Breadcrumbs = (props: IBreadCrumbs) => {

  const navigate: any = useNavigate();

  return (
    <div className="d-flex justify-content-start align-items-center">
      {
        props.links.map((link, index) => {
          if (index === 0) {
            return (
              <div className="text-secondary fs-4 fw-bold cursor-pointer">
                <span onClick={() => navigate(link.url)}></span>
              </div>
            )
          }
          return (<>
            <div className="fs-4 text-secondary fw-bold align-items-center d-flex justify-content-start">
              <FaAngleRight />
              <span className={link.active ? "fs-dhunprimary cursor-pointer": "cursor-pointer"} onClick={() => navigate(link.url)}></span>
            </div>
          </>)
        })}
    </div>
  );
};

export default Breadcrumbs;
