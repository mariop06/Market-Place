import { ListProdSellers } from "@/components/listProd-Sellers/ListProdSellers";
import { listProd } from "../firstPage/elementListOrSellers";
import { BackButton } from "@/components/backButton/BackButton";
import { FormRegisterProduct } from "./FormRegisterProduct";
import { Divider } from "@/components/divider/Divider";
import { LoadImageProductCard } from "./LoadImageProductCard";



export const CreateProduct=()=>{
    return(
        <div className="w-full h-full flex flex-col p-5 gap-0 " >
            <BackButton/>
           <div className="w-full h-full flex flex-col p-6 gap-5 " >
               <h1 className="text-[25px] text-black font-medium" >Adicionar Imagens</h1>
               <div  className="flex justify-between " >
                   <LoadImageProductCard/>
                   
                   {/* <div className="flex flex-col gap-3 bg-[#c4c3c3eb] w-[400px] min-h-max p-6 rounded-xl shadow-xl  "> */}
                        <FormRegisterProduct/>
                   
               </div>

               <Divider/>

               <div className="flex flex-col gap-5 h-full text-[#787575]" >
                <p className="flex text-[20px] font-medium text-[#787575] ">Seus Produtos </p>
                <div className="flex flex-wrap gap-7" >
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
           </div>

        </div>
    );
}