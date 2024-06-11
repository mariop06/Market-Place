
import { useNavigate } from "react-router-dom";
import { dateNavBar } from "./navProps";
import { InputButton } from "./ButtonNavBar";

export const NavBar =()=>{
    const navigate =useNavigate()
    
    return(
        <div className="bg-white w-full max-h-max p-2 mb-3 text-[#787575] gap-3 flex flex-col justify-center shadow-lg" >
            <div className="flex flex-row justify-between">
                    <div className="shadow-sm rounded-full justify-center " >
                        <img src="logo.png" className="size-[90px]  " />
                    </div>
                    <div className="flex gap-6 justify-center items-center "  >
                        <div className="flex gap-6 " >
                            <InputButton value="Sign up" onClick={()=>navigate('/shopping')}  />
                            <InputButton value="Login" controller onClick={()=>navigate('/shopping')}  />
                        </div>
                    </div>
            </div>
            <div className="border-b m-0" />
            <div className="flex flex-row gap-3 justify-between " >
                <div className="flex flex-row gap-10 justify-center " >
                    {dateNavBar.map((element)=>(
                        <button onClick={()=>navigate(element.path)} >{element.name}</button>
                    ))}
                </div>
                <div className="flex gap-6 justify-center " >
                    <InputButton value="Sell Items" onClick={()=>navigate('/product/create')}   />
                    <button>login</button> {/*Icon Cesto! */}
                </div>

            </div>
            
        </div>
    );
}

