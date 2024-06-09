import { ListProdSellers } from "@/components/listProd-Sellers/ListProdSellers";
import { sellers } from "../firstPage/elementListOrSellers";
import { ViewImageCards } from "./ViewImageCards";
import { ProdDetails } from "./ProdDetails";

export const ProductDetails=()=>{
    return(
        <div className="w-full h-full flex flex-col p-6 gap-5 " >
            <div>back</div> 
           <div className="w-full h-full flex flex-col p-6 gap-10 " >
               
               <div  className="flex gap-6 " >
                   <ViewImageCards/>
                   <ProdDetails/>
               </div>
               
               <div className="w-full h-[1px] bg-[#00000029]" ></div>
               <div className="flex flex-col gap-5 h-full text-[#787575]" >
                   <p className="flex text-[20px] font-medium text-[#787575] ">Vendedores Populares</p>
                   <div className="flex gap-7" >
                       {
                           sellers.map((element)=>(
                               <ListProdSellers
                               ProductOrSellers={element.ProductOrSellers}
                               Icon={element.Icon}
                               path={element.path}
                               control
                           />
                           ))
                       }
                   </div>
               </div>
           </div>

        </div>
    );
}