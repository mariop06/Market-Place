import { ListProdSellers } from "@/components/listProd-Sellers/ListProdSellers"
import { listProd } from "../firstPage/elementListOrSellers"



export const Category=()=>{
    return(
        <div className="flex flex-col gap-2">
            <h2  className="flex text-[25px] font-normal text-[#787575] " >Category</h2>

            <div className=" flex justify-center gap-5"  >
                {
                    category.map((element)=>(<div className="bg-[#E3E2E2] w-[200px] h-[180px]  text-[#1f1e1e] text-[25px] font-semibold rounded-xl shadow-xl flex justify-center items-center cursor-pointer " >{element.value}</div>))
                }
            </div>

            <div className="flex flex-col gap-5 h-full text-[#787575]">
                <p className="flex text-[20px] font-medium text-[#787575]">Tops</p>
                <div className="flex flex-wrap gap-7">
                    {
                        listProd.map((element) => (
                            <ListProdSellers
                                key={element.path}
                                ProductOrSellers={element.Product}
                                Icon={element.Icon}
                                Price={element.Price}
                                path={element.path}
                                controller
                            />
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-5 h-full text-[#787575]">
                <p className="flex text-[20px] font-medium text-[#787575]">Tops</p>
                <div className="flex flex-wrap gap-7">
                    {
                        listProd.map((element) => (
                            <ListProdSellers
                                key={element.path}
                                ProductOrSellers={element.Product}
                                Icon={element.Icon}
                                Price={element.Price}
                                path={element.path}
                                controller
                            />
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-5 h-full text-[#787575]">
                <p className="flex text-[20px] font-medium text-[#787575]">Tops</p>
                <div className="flex flex-wrap gap-7">
                    {
                        listProd.map((element) => (
                            <ListProdSellers
                                key={element.path}
                                ProductOrSellers={element.Product}
                                Icon={element.Icon}
                                Price={element.Price}
                                path={element.path}
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