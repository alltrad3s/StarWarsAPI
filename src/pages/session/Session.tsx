import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { RegisterForm } from "./components/RegisterForm";
import { LoginForm } from "./components/LoginForm";
import Logo from "../../assets/images/SWAPI.png";
import BGSession from "../../assets/images/StarWarsBG.png";
import { useAuth } from "../../context/AuthContext";

export const Session: React.FC = () => {
  const [typeForm, setTypeForm] = useState<"Login" | "Register">("Login");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const { user, loading } = useAuth(); // Use the auth context

  const handleRegisterSuccess = () => {
    setRegistrationSuccess(true);
    setTypeForm("Login");
  };

  // If the user is logged in, redirect them to the dashboard
  if (user && !loading) {
    return <Navigate to="/dashboard" replace />;
  }

  // Show a loading state while checking auth
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex h-full">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img className="h-30 w-auto" src={Logo} alt="Your Company" />
            </div>
            <div className="mt-0">
              {registrationSuccess && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
                  Registration successful! You can now log in.
                </div>
              )}
              <div>
                {typeForm === "Login" ? <LoginForm /> : <RegisterForm onRegisterSuccess={handleRegisterSuccess} />}
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">Or</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button className="flex w-full justify-center rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-semibold leading-6 text-amber-400 shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => {setTypeForm("Login"); setRegistrationSuccess(false);}}>Log In</button>

                  <button className="flex w-full justify-center rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-semibold leading-6 text-amber-400 shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => {setTypeForm("Register"); setRegistrationSuccess(false);}}>Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img className="absolute inset-0 h-full w-full object-cover" src={BGSession} alt="" />
        </div>
      </div>
    </>
  );
};