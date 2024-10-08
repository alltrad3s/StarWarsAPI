import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserDataContext";

export const Home = () => {
const info = useContext(UserContext);

  return (
    <>
        <Link to="/session">Login</Link>

        <p className="text-xl">Home</p>
    </>
  )
}
