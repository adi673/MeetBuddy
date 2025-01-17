import { useState, useEffect, useMemo, useCallback, memo } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import NavBar from './navbar';
import FooterPage from './footer';
import QuestionnaireList from './QuestionnaireList';
// import './App.css'



function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>  
            <Route path="/" element={<Landing />} />   
            <Route path="/download" element={<Component1 />} />   
            <Route path="/survey" element={<QuestionnaireList/>} />
            <Route path="/dashboard" element={<Component1/>} />
            <Route path="/notifications" element={<Component1 />} />
          </Route>
          <Route path="*" element={<Error />} />                    
        </Routes>
        {/* Static Content outside Routes */}
        
      </BrowserRouter>
    </>
  );
}


// function Layout() {
//   return (
//     <>
//       <div className="min-h-screen flex flex-col">
//         <NavBar />

//         <div className="min-h-[90vh] flex-grow">
//           <Outlet />
//         </div>

//         <FooterPage />
//       </div>
//     </>
//   );
// }

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Navbar */}
      <div className="sticky top-0 z-50 m-0 p-0">
        <NavBar />
      </div>

      {/* Dynamic Content */}
      <main className="flex-grow m-0 p-0 min-h-[90vh]">
        <Outlet />
      </main>

      {/* Footer */}
      <FooterPage />
    </div>
  );
}



function Component1() {
  return <div>class 11 Rendered </div>
}

function Landing(){
  return <div>Hello</div>
}

export default Router

