import { dateNavBar } from "./navProps";

export const NavBar =()=>{
    return(
        <div className="bg-white w-full max-h-max p-2 mb-3 text-[#787575] gap-3 flex flex-col justify-center shadow-lg" >
            <div className="flex flex-row justify-between">
                <div>Logo</div>
                <div className="flex gap-6 " >
                    <InputButton value="Sign up"  />
                    <InputButton value="Login" controller />
                </div>
            </div>
            <div className="border-b m-0" />
            <div className="flex flex-row gap-3 justify-between " >
                <div className="flex flex-row gap-10 justify-center " >
                    {dateNavBar.map((element)=>(
                        <button>{element.path}</button>
                    ))}
                </div>
                <div className="flex gap-6 justify-center " >
                    <InputButton value="Sell Items" />
                    <button>login</button>
                </div>

            </div>
            
        </div>
    );
}

interface IPropsButton{
    value:string;
    controller?:boolean;
}

export const InputButton=({value,controller}:IPropsButton)=>{
    return(
        <input type="button" value={value}  className={`cursor-pointer rounded-[100px]   w-[100px] h-[28px]  ${controller? ' text-[#FFFF] bg-[#D9D226]':' text-[#787575] bg-white border border-[#D9D226]'}`} />
    );
}