import { Panel } from "@/components/panel/Panel";
import { listProd } from "../firstPage/elementListOrSellers";
import { ListProdSellers } from "@/components/listProd-Sellers/ListProdSellers";

export const Products=()=>{
    return(
        <div className='w-full h-full flex flex-col gap-5 p-5' >
            <Panel value="Artigos" />

            <Category/>
        </div>
    );
}

const Category=()=>{
    return(
        <div className="flex flex-col gap-2">
            <h2  className="flex text-[25px] font-normal text-[#787575] " >Category</h2>

            <div className=" flex gap-5"  >
                {
                    category.map((element)=>(<div className="bg-[#E3E2E2] w-[200px] h-[180px]  text-[#1f1e1e] text-[25px] font-semibold rounded-xl shadow-xl flex justify-center items-center cursor-pointer " >{element.value}</div>))
                }
            </div>

            <div className="flex flex-col gap-5 h-full text-[#787575]" >
                <p className="flex text-[25px] font-normal text-[#787575] ">Tops</p>
                <div className="flex gap-7" >
                    {
                        listProd.map((element)=>(
                            <ListProdSellers
                            ProductOrSellers={element.Product}
                            Icon={element.Icon}
                            Price={element.Price}
                            controller
                        />
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-5 h-full text-[#787575]" >
                <p className="flex text-[25px] font-normal text-[#787575] ">Tops</p>
                <div className="flex gap-7" >
                    {
                        listProd.map((element)=>(
                            <ListProdSellers
                            ProductOrSellers={element.Product}
                            Icon={element.Icon}
                            Price={element.Price}
                            controller
                        />
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-5 h-full text-[#787575]" >
                <p className="flex text-[25px] font-normal text-[#787575] ">Tops</p>
                <div className="flex gap-7" >
                    {
                        listProd.map((element)=>(
                            <ListProdSellers
                            ProductOrSellers={element.Product}
                            Icon={element.Icon}
                            Price={element.Price}
                            controller
                        />
                        ))
                    }
                </div>
            </div>
            
            
           
            
        </div>
    )
} 

const category=[
    {
        value:'Tops'
    },
    {
        value:'Tops'
    },
    {
        value:'Tops'
    },
    {
        value:'Tops'
    },
    {
        value:'Tops'
    },

]