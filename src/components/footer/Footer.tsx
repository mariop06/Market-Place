

export const Footer=()=>{
    return(
        <div className="bg-[#B2935B] w-full h-[300px] rounded-t-3xl flex flex-row justify-center items-center  " >
            <div className=" w-[90%] h-[90%] flex flex-row justify-between"  >
                <div>logo
                    <div>Description</div>
                </div>
                
                <div className="w-[0.5px] h-full bg-[#00000042]" /> {/*Divider */}

                <div className="flex flex-col justify-between" >
                    <div className="flex gap-4" >
                        <div className="bg-slate-100 w-[50px] h-[50px]"/>
                        <div className="bg-slate-100 w-[50px] h-[50px]"/>
                        <div className="bg-slate-100 w-[50px] h-[50px]"/>
                    </div>
                    <div>
                        Todos Direitos reservados
                    </div>
                </div>
            </div>
        </div>
    );
}