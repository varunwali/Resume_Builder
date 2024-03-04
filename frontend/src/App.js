import React, { useContext, useEffect } from "react";
import { Context } from "./index";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Login from "./components/Auth/login";
import Signup from "./components/Auth/signup";
import Template from "./components/Template/Template";

const App = () => {
  // const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:5000/api/v1/user/getuser",
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       setUser(response.data.user);
  //       setIsAuthorized(true);
  //     } catch (error) {
  //       setIsAuthorized(false);
  //     }
  //   };
  //   fetchUser();
  // }, [isAuthorized]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Header />} />
          <Route path="/Body" element={<Body />} />
          <Route path="/templates" element={<Template />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
