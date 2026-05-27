import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../store/reduxHooks";

// import { onSetToken } from "../store/actions/auth";
// import { useAppDispatch, useAppSelector } from "../";
// import HomePage from "../views/private/Components/HomePage";
import { Config } from "./config";

// const CustomerRouter = () => {
//   const { pathname } = useLocation();
//   const isLoggedIn = useAppSelector((state) => state.auth.loggedIn);
//   const authToken = sessionStorage.getItem("authKey") || "";

//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     if (!isLoggedIn && authToken) {
//       dispatch();
//     }
//   },  [dispatch]);

//   return (
//     <>
//       {isLoggedIn && <HomePage />}
//       {!authToken && <Navigate state={{ redirectTo: pathname }} to="/" />}
//     </>
//   );
// };
const MainRoutes = () => {
  return (
    // <Routes>
    //     <Route path="/" >
    //     {Config.map((config) => (
    //       <Route
    //         key={config.path}
    //         path={config.path}
    //         element={<config.element />}
    //       />
    //     ))}
    //   </Route>
    //   <Route path="*" element={<Navigate to="/" />} />
    // </Routes>
    <>
        <Routes>
            {Config.map((config) => (
            <Route
                key={config.path}
                path={config.path}
                element={<config.element />}
            />
            ))}
            {/* <Route path="/admin" element={<PrivateRouter />}>
            {privateConfig.map((config) => (
                <Route
                key={config.path}
                path={config.path}
                element={<config.element />}
                />
            ))}
            </Route> */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </>
  );
};

export default MainRoutes;
