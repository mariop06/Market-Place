import { Outlet } from "react-router-dom";


export const AuthLayout=()=>{
    return(
        <div className="flex justify-center items-center w-full h-full bg-slate-100">
             <Outlet/>
        </div>
    );
}