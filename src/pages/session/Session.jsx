import { Link } from "react-router-dom"
import { RegisterForm } from "./components/RegisterForm"
import { LoginForm } from "./components/LoginForm"
import { useState } from "react"

export const Session = () => {
  const [typeForm, setTypeForm] = useState("");

  return (
    <>
        <Link to="/home">Ir al home</Link>
        <button onClick={() => {setTypeForm("Login")}}>Log In</button>
        <button onClick={() => {setTypeForm("Register")}}>Register</button>

        {typeForm === "Login" ? <LoginForm /> : <RegisterForm /> }
    </>
  )
}
