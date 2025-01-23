import  Navbar  from "./Componets/Navbar";
import { Footer } from "./Componets/Footer.jsx";
import { Navigate, Outlet } from 'react-router-dom';
import Login from './Componets/LogIn';
import Signup from './Componets/Signup.jsx';
import BioDataForm from "./Componets/BioDataForm";
import { ProtectedRoute } from "./Componets/ProtectedRoutes";
 const App = () => {
  return (
    <>   
     <Navbar/>
    <Outlet />
    <Footer/>
    </>

  )
}
export default App