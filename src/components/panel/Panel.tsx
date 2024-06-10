

interface IPropsPanel {
    value:string;
    controller?:boolean;
}

export const Panel:React.FC<IPropsPanel>=({controller,value})=>{
    return(
            <div className={`w-full ${controller? ' h-96':'h-48'} rounded-xl flex justify-center items-center bg-[#B2935B] shadow-xl `} >
            <div className="gap-5 w-[60%] h-full flex flex-col justify-center items-center ">
                <p className="font-semibold text-white text-[30px]">{value}</p>
                   {
                    controller && ( <InputText/>)
                   }
            </div>
        </div>
    );
}

 const InputText=()=>{
    return(
        <div className="bg-white p-1 flex flex-row items-center rounded-full w-[65%] h-10  " >search <input type="text" placeholder="O que está procurando?" className="rounded-full p-2 border border-none w-full outline-none "  /> </div>
    );
}