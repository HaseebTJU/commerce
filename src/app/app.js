import React from "react"; 
import Login from "../components/login"; 
import Registration from "../components/registration";
import Root from "../components/Root";
import Main from "../components/Main";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"; 

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/main" element={<Main/>} />
        </Route>
    )
);

function App() {
    return (
        <RouterProvider router={router}/>
    );
  }
  
  export default App;