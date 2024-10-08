import { RegisterForm } from "./components/RegisterForm"
import { LoginForm } from "./components/LoginForm"
import { useState } from "react"
import Logo from "../../assets/images/Full-Stack-Jr.webp"

export const Session = () => {
  const [typeForm, setTypeForm] = useState("");

  return (
    <>
        <div className="flex h-full">
          <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <img className="h-10 w-auto" src={Logo} alt="Your Company" />
              </div>
              <div className="mt-10">
                <div>
                  {typeForm === "Login" ? <LoginForm /> : <RegisterForm /> }
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
                    <button className="flex w-full justify-center rounded-md bg-custom-purple px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => {setTypeForm("Login")}}>Log In</button>

                    <button className="flex w-full justify-center rounded-md bg-custom-purple px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => {setTypeForm("Register")}}>Register</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden w-0 flex-1 lg:block">
            <img className="absolute inset-0 h-full w-full object-cover" src="https://cdn-knihf.nitrocdn.com/ibKONdxVNJApfXYlVVFSuGXgWUgPJrvN/assets/images/optimized/rev-826ee6b/kodigowebstorage.blob.core.windows.net/kodigowebsite/2023/11/header-bg-1.webp" alt="" />
          </div>
        </div>
    </>
  )
}
