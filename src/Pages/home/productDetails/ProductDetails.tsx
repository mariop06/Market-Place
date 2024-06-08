import { ListProdSellers } from "@/components/listProd-Sellers/ListProdSellers";
import { sellers } from "../firstPage/elementListOrSellers";

export const ProductDetails=()=>{
    return(
        <div className="w-full h-full flex flex-col p-6 gap-5 " >
            <div>back</div> 
           <div className="w-full h-full flex flex-col p-6 gap-10 " >
               
               <div  className="flex gap-6 " >
                   <div className="flex flex-col gap-5 " >
                        <div className="bg-[#E3E2E2] w-[120px] h-[120px] rounded-xl shadow-xl" ></div>
                        <div className="bg-[#E3E2E2] w-[120px] h-[120px] rounded-xl shadow-xl" ></div>
                        <div className="bg-[#E3E2E2] w-[120px] h-[120px] rounded-xl shadow-xl" ></div>
                   </div>
                   <div className="bg-[#E3E2E2] w-[350px] h-[400px] rounded-xl shadow-xl"></div>
                   <div className="flex flex-col gap-3">
                       <h1 className="text-[25px] font-medium  text-[#000000] " >Black Pants</h1>
                       <div className="flex flex-col items-start gap-10" >
                           <div className="flex justify-center items-center gap-3 cursor-pointer">
                               <span className="bg-[#E3E2E2] w-[45px] h-[45px] rounded-full inline-block " ></span>
                               <span className="text-[13px] font-medium  text-[#787575] cursor-pointer " >Debby Space</span>
                           </div>
                           <article className="max-w-[400px] max-h-max p-3 text-justify " >Description- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex iusto labore blanditiis quas animi architecto porro, ad nesciunt pariatur dicta sequi reiciendis deserunt cum amet fugit, quod, maxime ea commodi. </article>
                       </div>
                       <div className="flex justify-center items-center  gap-10 " >
                       <input type="button" value="Carrinho"  className={`cursor-pointer rounded-[100px]   w-[200px] h-[32px]  text-[#787575] text-[20px] font-normal bg-white border border-[#D9D226]`} />
                       <span className="bg-[#E3E2E2] w-[45px] h-[45px] rounded-full flex justify-center items-center cursor-pointer " >Heart</span>
                       </div>
                   </div>
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