import { HomePage } from "../../page/home/Home";
import { NavBar } from "../navBar/NavBar";


export const Layout=()=>{
    return(
        <div>
            <NavBar/>
            <HomePage/>
           
        </div>
    );
}