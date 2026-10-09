import { Footer } from './Footer';
import { Navbar } from './Navbar'
import { Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
    
  )
}
