


interface IPropsListOrSellers{
    ProductOrSellers: string;
    Icon?: string;
    Price?: string;
    controller?:boolean;
    control?:boolean;
}

export const ListProdSellers:React.FC<IPropsListOrSellers>=({ProductOrSellers: Product,Price,Icon,controller,control})=>{
    return(
        <div className="flex flex-col gap-5  text-[#787575] ">
            {
                controller && ( <Card Product={Product} Price={Price} Icon={Icon} controller />)  
            }
            {
                control && (<Card Product={Product} Price={Price} Icon={Icon} />)
            }
        </div>
    );
}


interface IPropsCardDate{
    Product: string;
    Icon?: string;
    Price?: string;
    controller?:boolean;
}

export const Card: React.FC<IPropsCardDate>=({Product,Price,controller,Icon})=>{
    return(
        <div className="max-w-max max-h-max flex flex-col gap-1">
            <div className="bg-[#E3E2E2] w-[200px] h-[220px] rounded-xl shadow-xl "></div>
            <div className=" flex flex-col gap-1" >
                <div className="flex justify-between text-[15px]">
                    <span>{Product}</span>
                    <span>{Icon}</span>
                </div>
                {
                    controller && ( <span className="flex text-[15px] font-semibold">{Price}</span>)
                }
               
            </div>
        </div>
    )
}