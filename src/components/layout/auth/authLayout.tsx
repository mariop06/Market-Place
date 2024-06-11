import { Outlet } from "react-router-dom";


export const AuthLayout=()=>{
    return(
        <div className="flex justify-center items-center w-full h-[100vh] bg-slate-100">
             <Outlet/>
        </div>
    );
}