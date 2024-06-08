

export const Footer=()=>{
    return(
        <div className="bg-[#D9D226] w-full h-[300px] rounded-t-3xl flex flex-row justify-center items-center  " >
            <div className=" w-[90%] h-[90%] flex flex-row justify-between"  >
                <div>logo
                    <div>Description</div>
                </div>
                
                <div className="w-[1px] h-full bg-[#0000007d]" />

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