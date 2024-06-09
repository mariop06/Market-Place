
import { useNavigate } from "react-router-dom";
import { dateNavBar } from "./navProps";

export const NavBar =()=>{
    const navigate =useNavigate()
    
    return(
        <div className="bg-white w-full max-h-max p-2 mb-3 text-[#787575] gap-3 flex flex-col justify-center shadow-lg" >
            <div className="flex flex-row justify-between">
                <div>Logo</div>
                <div className="flex gap-6 " >
                    <InputButton value="Sign up" onClick={()=>navigate('/shopping')}  />
                    <InputButton value="Login" controller onClick={()=>navigate('/shopping')}  />
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

interface IPropsButton{
    value:string;
    controller?:boolean;
    onClick:()=>void;

}

export const InputButton=({value,controller,onClick}:IPropsButton)=>{
    return(
        <input type="button" value={value}  className={`cursor-pointer rounded-[100px]   w-[100px] h-[28px]  ${controller? ' text-[#FFFF] bg-[#D9D226]':' text-[#787575] bg-white border border-[#D9D226]'}`}
        onClick={onClick}
        />
    );
}