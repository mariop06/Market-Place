
import { ListProdSellers } from "@/components/listProd-Sellers/ListProdSellers";
import { listProd } from "../firstPage/elementListOrSellers";

export const SellersProfile_User=()=>{

    return(
        <div className="w-full h-full flex flex-col p-5 gap-0 " >
            <div>back</div> 
            <div className="w-full h-full flex flex-col p-6 gap-5 " >
                <div className="w-full h-full flex justify-between"  >
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col items-start gap-10" >
                            <div className="flex justify-center items-center gap-3 cursor-pointer">
                                <span className="bg-[#E3E2E2] w-[45px] h-[45px] rounded-full inline-block " />
                                {/* <span className="text-[13px] font-medium  text-[#787575] cursor-pointer ">Debby Space</span> */}
                                <h1 className="text-[25px] font-medium  text-[#000000] " >Debby Space</h1>
                            </div>

                            <article className="max-w-[400px] max-h-max p-3 text-justify " >Description- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex iusto labore blanditiis quas animi architecto porro, ad nesciunt pariatur dicta sequi reiciendis deserunt cum amet fugit, quod, maxime ea commodi. </article>

                        </div>
                        <div className="flex  items-center  gap-10 " >
                            <input type="button" value="Add aos Favoritos"  className={`cursor-pointer rounded-[100px]   w-[200px] h-[32px]  text-[#787575] text-[20px] font-normal bg-white border border-[#D9D226]`} />
                            <span className="bg-[#E3E2E2] w-[45px] h-[45px] rounded-full flex justify-center items-center cursor-pointer " >Like</span>
                        </div>
                    </div>

                    <div className="w-[700px] h-[300px] rounded-xl flex justify-center items-center bg-[#acababc5]" >Google MAPS</div>
                </div>

               <div className="w-full h-[1px] bg-[#00000029]"/> {/*Divider*/}
                <div className="flex flex-col gap-5 h-full text-[#787575]" >
                    <p className="flex text-[20px] font-medium text-[#787575] ">Listados Recentemente </p>
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
           </div>

        </div>
    );
}


