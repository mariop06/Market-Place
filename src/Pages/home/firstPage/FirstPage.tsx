import { ListProdSellers } from "@/components/listProd-Sellers/ListProdSellers";
import { Panel } from "@/components/panel/Panel";
import { sellers,listProd} from "./elementListOrSellers";

export const FirstPage:React.FC=()=>{
    return(
        <div className="w-full h-full p-8 flex flex-col gap-10" > 
            <Panel value="Encontre Aqui !" controller />

            <div className="flex flex-col gap-5 h-full text-[#787575]" >
                <p className="flex text-[20px] font-medium text-[#787575] ">Listados Rencentemente </p>
                <div className="flex gap-7" >
                    {
                        listProd.map((element)=>(
                            <ListProdSellers
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

            <div className="flex flex-col gap-5 h-full text-[#787575]" >
                <p className="flex text-[20px] font-medium text-[#787575] ">Vendedores Populares</p>
                <div className="flex gap-7" >
                    {
                        sellers.map((element)=>(
                            <ListProdSellers
                            ProductOrSellers={element.ProductOrSellers}
                            Icon={element.Icon}
                            path=""
                            control
                        />
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-5 h-full text-[#787575]" >
                <p className="flex text-[20px] font-medium text-[#787575] ">Vendedores Populares</p>
                <div className="flex gap-7" >
                    {
                        sellers.map((element)=>(
                            <ListProdSellers
                            ProductOrSellers={element.ProductOrSellers}
                            Icon={element.Icon}
                            path=''
                            control
                        />
                        ))
                    }
                </div>
            </div>

        </div>
    );
}