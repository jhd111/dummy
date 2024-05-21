
// import  { useEffect, useState } from "react";
// import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import axios from "axios";

// const Dashboard = () => {
 
//     const location = useLocation();
//     const [isDashboard, setIsDashboard] = useState(false);
  
//     useEffect(() => {
//       setIsDashboard(location.pathname === "/dashboard");
//     }, [location]);
 
//   return (
//     <div className="container-fluid">
//       <div className="row flex-nowrap">
//         <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 " style={{backgroundColor: "#f8f8f8"}}>
//           <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
//             <Link
//               to="/dashboard"
//               className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-dark text-decoration-none"
//             >
//               <span className="fs-5 fw-bolder d-none d-sm-inline">
//                 Dashboard
//               </span>
//             </Link>
//             <ul
//               className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
//               id="menu"
//             >
//               <li className="w-100">
//                 <Link
//                   to="/dashboard"
//                   className="nav-link text-dark px-0 align-middle"
//                 >
//                   <i className="fs-4 bi-speedometer2 ms-2"></i>
//                   <span className="ms-2 d-none d-sm-inline">Dashboard</span>
//                 </Link>
//               </li>
//               <li className="w-100">
//                 <Link
//                   to="/dashboard/employee"
//                   className="nav-link px-0 align-middle text-dark"
//                 >
//                   <i className="fs-4 bi-people ms-2"></i>
//                   <span className="ms-2 d-none d-sm-inline">
//                     Sale Management
//                   </span>
//                 </Link>
//               </li>
//               <li className="w-100">
//                 <Link
//                   to="/dashboard/category"
//                   className="nav-link px-0 align-middle text-dark"
//                 >
//                   <i className="fs-4 bi-columns ms-2"></i>
//                   <span className="ms-2 d-none d-sm-inline">Outstanding</span>
//                 </Link>
//               </li>
//               <li className="w-100">
//                 <Link
//                   to="/dashboard/profile"
//                   className="nav-link px-0 align-middle text-dark"
//                 >
//                   <i className="fs-4 bi-person ms-2"></i>
//                   <span className="ms-2 d-none d-sm-inline">Agent Ledger</span>
//                 </Link>
//               </li>
//               <li className="w-100" >
//               <Link
//                   className="nav-link px-0 align-middle text-dark"
//                 >
//                  <i class="fs-4 bi bi-building ms-2"></i>
//                   <span className="ms-2 d-none d-sm-inline">Company Ledger</span>
//                 </Link>
//               </li>
//               <li className="w-100" >
//               <Link
//                   className="nav-link px-0 align-middle text-dark"
//                 >
//                   <i class="fs-4 bi bi-bank ms-2"></i>
//                   <span className="ms-2 d-none d-sm-inline">Bank Statement</span>
//                 </Link>
//               </li>
//               <li className="w-100" >
//               <Link
//                   className="nav-link px-0 align-middle text-dark"
//                 >
//                  <i class="fs-4 bi bi-gear ms-2"></i>
//                   <span className="ms-2 d-none d-sm-inline">Setting</span>
//                 </Link>
//               </li>
             
//               <li className="w-100" >
//               <Link
//                   className="nav-link px-0 align-middle text-dark"
//                 >
//                   <i className="fs-4 bi-power ms-2"></i>
//                   <span className="ms-2 d-none d-sm-inline">Log out</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="col-md-9 p-0 m-0">
//             <div className="p-2 d-flex justify-content-center shadow">
//                 <h4>Dashboard</h4>
             
//             </div>
//             {isDashboard && (
//             <>
//             <div className="row mt-4 ms-2">
//               <div className="p-2 col-md-2  ms-2 d-flex justify-content-center shadow">
//                 <h4>Box 1</h4>
//               </div>
//               <div className="p-2 col-md-2  ms-2 d-flex justify-content-center shadow">
//                 <h4>Box 2</h4>
//               </div>
//               <div className="p-2 col-md-2  ms-2 d-flex justify-content-center shadow">
//                 <h4>Box 3</h4>
//               </div>
//               </div>
//             </>
//           )}
//             <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useEffect, useState } from "react";
// import { Link, Outlet, useLocation } from "react-router-dom";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import axios from "axios";

// const Dashboard = () => {
//     const location = useLocation();
//     const [isDashboard, setIsDashboard] = useState(false);
  
//     useEffect(() => {
//       setIsDashboard(location.pathname === "/dashboard");
//     }, [location]);

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-lg-3 col-xl-2 px-sm-2 px-0" style={{ backgroundColor: "#f8f8f8" }}>
//           <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
//             <Link
//               to="/dashboard"
//               className="d-flex align-items-center pb-3 mb-1 mt-3 me-auto text-dark text-decoration-none"
//             >
//               <span className="fs-5 fw-bolder d-none d-sm-inline">
//                 Dashboard
//               </span>
//             </Link>
//             <ul
//               className="nav nav-pills flex-column mb-0 align-items-center align-items-sm-start"
//               id="menu"
//             >
//               <li>
//                 <Link
//                   to="/dashboard"
//                   className="nav-link text-dark px-0"
//                 >
//                   <i className="fs-4 bi-speedometer2 me-2"></i>
//                   <span className="d-none d-sm-inline">Dashboard</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/dashboard/employee"
//                   className="nav-link px-0 text-dark"
//                 >
//                   <i className="fs-4 bi-people me-2"></i>
//                   <span className="d-none d-sm-inline">
//                     Sale Management
//                   </span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/dashboard/category"
//                   className="nav-link px-0 text-dark"
//                 >
//                   <i className="fs-4 bi-columns me-2"></i>
//                   <span className="d-none d-sm-inline">Outstanding</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/dashboard/profile"
//                   className="nav-link px-0 text-dark"
//                 >
//                   <i className="fs-4 bi-person me-2"></i>
//                   <span className="d-none d-sm-inline">Agent Ledger</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="nav-link px-0 text-dark"
//                 >
//                   <i className="fs-4 bi bi-building me-2"></i>
//                   <span className="d-none d-sm-inline">Company Ledger</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="nav-link px-0 text-dark"
//                 >
//                   <i className="fs-4 bi bi-bank me-2"></i>
//                   <span className="d-none d-sm-inline">Bank Statement</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="nav-link px-0 text-dark"
//                 >
//                   <i className="fs-4 bi bi-gear me-2"></i>
//                   <span className="d-none d-sm-inline">Setting</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="nav-link px-0 text-dark"
//                 >
//                   <i className="fs-4 bi-power me-2"></i>
//                   <span className="d-none d-sm-inline">Log out</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="col-lg-9 col-xl-10">
//           <div className="p-2 d-flex justify-content-center shadow">
//             <h4>Dashboard</h4>
//           </div>
//           {isDashboard && (
//             <div className="row mt-4">
//               <div className="col-md-4 mb-3">
//                 <div className="p-2 d-flex justify-content-center shadow">
//                   <h4>Box 1</h4>
//                 </div>
//               </div>
//               <div className="col-md-4 mb-3">
//                 <div className="p-2 d-flex justify-content-center shadow">
//                   <h4>Box 2</h4>
//                 </div>
//               </div>
//               <div className="col-md-4 mb-3">
//                 <div className="p-2 d-flex justify-content-center shadow">
//                   <h4>Box 3</h4>
//                 </div>
//               </div>
//             </div>
//           )}
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useEffect, useState } from "react";
// import { Link, Outlet, useLocation } from "react-router-dom";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import axios from "axios";

// const Dashboard = () => {
//     const location = useLocation();
//     const [isDashboard, setIsDashboard] = useState(false);
//     const [showMenu, setShowMenu] = useState(false); // State to control menu visibility
  
//     useEffect(() => {
//       setIsDashboard(location.pathname === "/dashboard");
//     }, [location]);

    
//     const toggleMenu = () => {
//         setShowMenu(!showMenu);
//     };
  
//     return (
//         <div className="container-fluid">
//             <div className="row">
               
//                 <div className="col-2 d-sm-none">
//                     <button className="btn btn-link" onClick={toggleMenu}>
//                         <i className="bi bi-list fs-4"></i>
//                     </button>
//                 </div>
//                 {/* Sidebar */}
//                 <div className={`col-lg-3 col-xl-2 px-sm-2 px-0 ${showMenu ? "d-block" : "d-none"} d-sm-block`} style={{ backgroundColor: "#f8f8f8" }}>
//                     <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
//                         <div className="d-flex justify-content-between align-items-center pb-3 mb-1 mt-3 me-auto text-dark">
//                             <Link to="/dashboard" className="text-decoration-none">
//                                 <span className="fs-5 fw-bolder d-none d-sm-inline">Dashboard</span>
//                             </Link>
//                         </div>
//                         {/* Menu items */}
//                         <ul className="nav nav-pills flex-column mb-0 align-items-center align-items-sm-start" id="menu">
//                             <li>
//                                 <Link to="/dashboard" className="nav-link text-dark px-0">
//                                     <i className="fs-4 bi-speedometer2 me-2"></i>
//                                     <span className="d-none d-sm-inline">Dashboard</span>
//                                 </Link>
//                             </li>


//                             <li>
//                  <Link
//                   to="/dashboard/employee"
//                   className="nav-link px-0 text-dark"
//                 >
//                   <i className="fs-4 bi-people me-2"></i>
//                   <span className="d-none d-sm-inline">
//                     Sale Management
//                   </span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/dashboard/category"
//                   className="nav-link px-0 text-dark"
//                 >
//                   <i className="fs-4 bi-columns me-2"></i>
//                   <span className="d-none d-sm-inline">Outstanding</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/dashboard/profile"
//                   className="nav-link px-0 text-dark"
//                 >
//                   <i className="fs-4 bi-person me-2"></i>
//                   <span className="d-none d-sm-inline">Agent Ledger</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="nav-link px-0 text-dark"
//                 >
//                   <i className="fs-4 bi bi-building me-2"></i>
//                   <span className="d-none d-sm-inline">Company Ledger</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="nav-link px-0 text-dark"
//                 >
//                   <i className="fs-4 bi bi-bank me-2"></i>
//                   <span className="d-none d-sm-inline">Bank Statement</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="nav-link px-0 text-dark"
//                 >
//                   <i className="fs-4 bi bi-gear me-2"></i>
//                   <span className="d-none d-sm-inline">Setting</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="nav-link px-0 text-dark"
//                 >
//                   <i className="fs-4 bi-power me-2"></i>
//                   <span className="d-none d-sm-inline">Log out</span>
//                 </Link>
//               </li>



//                             {/* Add other menu items */}
//                         </ul>
//                     </div>
//                 </div>
//                 {/* Dashboard and Boxes */}
//                 <div className="col-lg-9 col-xl-10">
//                     <div className="p-2 d-flex justify-content-center shadow">
//                         <h4>Dashboard</h4>
//                     </div>
//                     {isDashboard && (
//                         <div className="row mt-4">
//                             <div className="col-md-4 mb-3">
//                                 <div className="p-2 d-flex justify-content-center shadow">
//                                     <h4>Box 1</h4>
//                                 </div>
//                             </div>
//                             <div className="col-md-4 mb-3">
//                                 <div className="p-2 d-flex justify-content-center shadow">
//                                     <h4>Box 2</h4>
//                                 </div>
//                             </div>
//                             <div className="col-md-4 mb-3">
//                                 <div className="p-2 d-flex justify-content-center shadow">
//                                     <h4>Box 3</h4>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     <Outlet />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

const Dashboard = () => {
    const location = useLocation();
    const [isDashboard, setIsDashboard] = useState(false);
    const [showMenu, setShowMenu] = useState(false); // State to control menu visibility
  
    useEffect(() => {
      setIsDashboard(location.pathname === "/dashboard");
    }, [location]);

    
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
  
    return (
        <div className="container-fluid">
            <div className="row">
               
                <div className="col-2 d-sm-none">
                    <button className="btn btn-link" onClick={toggleMenu}>
                        <i className="bi bi-list fs-4"></i>
                    </button>
                </div>
                {/* Sidebar */}
                <div className={`col-lg-3 col-xl-2 px-sm-2 px-0 ${showMenu ? "d-block" : "d-none"} d-sm-block`} style={{ backgroundColor: "#f8f8f8" }}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
                        <div className="d-flex justify-content-between align-items-center pb-3 mb-1 mt-3 me-auto text-dark">
                            <Link to="/dashboard" className="text-decoration-none">
                                <span className="fs-5 fw-bolder d-none d-sm-inline">Dashboard</span>
                            </Link>
                        </div>
                        {/* Menu items */}
                        <ul className="nav nav-pills flex-column mb-0 align-items-center align-items-sm-start" id="menu">
                            <li>
                                <Link to="/dashboard" className="nav-link text-dark px-0">
                                    <i className="fs-4 bi-speedometer2 me-2 d-sm-inline"></i>
                                    <span className="d-sm-inline">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/employee" className="nav-link text-dark px-0">
                                    <i className="fs-4 bi-people me-2 d-sm-inline"></i>
                                    <span className="d-sm-inline">Sale Management</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/category" className="nav-link text-dark px-0">
                                    <i className="fs-4 bi-columns me-2 d-sm-inline"></i>
                                    <span className="d-sm-inline">Outstanding</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/profile" className="nav-link text-dark px-0">
                                    <i className="fs-4 bi-person me-2 d-sm-inline"></i>
                                    <span className="d-sm-inline">Agent Ledger</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/company" className="nav-link text-dark px-0">
                                    <i className="fs-4 bi-building me-2 d-sm-inline"></i>
                                    <span className="d-sm-inline">Company Ledger</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/bank" className="nav-link text-dark px-0">
                                    <i className="fs-4 bi-bank me-2 d-sm-inline"></i>
                                    <span className="d-sm-inline">Bank Statement</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/settings" className="nav-link text-dark px-0">
                                    <i className="fs-4 bi-gear me-2 d-sm-inline"></i>
                                    <span className="d-sm-inline">Settings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/logout" className="nav-link text-dark px-0">
                                    <i className="fs-4 bi-power me-2 d-sm-inline"></i>
                                    <span className="d-sm-inline">Log out</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Dashboard and Boxes */}
                <div className="col-lg-9 col-xl-10">
                    <div className="p-2 d-flex justify-content-center shadow">
                        <h4>Dashboard</h4>
                    </div>
                    {isDashboard && (
                        <div className="row mt-4">
                            <div className="col-md-4 mb-3">
                                <div className="p-2 d-flex justify-content-center shadow">
                                    <h4>Box 1</h4>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="p-2 d-flex justify-content-center shadow">
                                    <h4>Box 2</h4>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="p-2 d-flex justify-content-center shadow">
                                    <h4>Box 3</h4>
                                </div>
                            </div>
                        </div>
                    )}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
