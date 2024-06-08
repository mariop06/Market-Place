import { Footer } from "@/components/footer/Footer";
import { NavBar } from "@/components/navBar/NavBar";
import { Outlet } from "react-router-dom";


export const HomeLayout =()=>{
    return(
        <div className="flex flex-col " >
            <NavBar/>
            <Outlet/>
   
           
            <Footer/>
        </div>
    );
}