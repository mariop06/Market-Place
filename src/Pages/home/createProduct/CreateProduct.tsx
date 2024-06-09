import { ListProdSellers } from "@/components/listProd-Sellers/ListProdSellers";
import { listProd } from "../firstPage/elementListOrSellers";

export const CreateProduct=()=>{
    return(
        <div className="w-full h-full flex flex-col p-5 gap-0 " >
            <div>back</div> 
           <div className="w-full h-full flex flex-col p-6 gap-5 " >
               <h1 className="text-[25px] text-black font-medium" >Adicionar Imagens</h1>
               <div  className="flex gap-[10%] " >
                    <div className="flex flex-col gap-5" >
                        <div className="bg-[#E3E2E2] w-[640px] h-[400px] rounded-xl shadow-xl"></div>
                        <div className="flex  gap-5 " >
                            <div className="bg-[#E3E2E2] w-[200px] h-[180px] rounded-xl shadow-xl" ></div>
                            <div className="bg-[#E3E2E2] w-[200px] h-[180px] rounded-xl shadow-xl" ></div>
                            <div className="bg-[#E3E2E2] w-[200px] h-[180px] rounded-xl shadow-xl" ></div>
                        </div>
                    </div>
                   
                   <div className="flex flex-col gap-3 bg-[#E3E2E2] w-[400px] min-h-max p-6 rounded-xl shadow-xl  ">
                        <h1 className="text-[25px] text-black font-medium" >Adicionar Imagens</h1>

                        <form action="" className="flex flex-col gap-3 justify-center items-start min-h-max ">
                            <div className="flex flex-col w-[350px]">
                                <label htmlFor="name">Nome:</label>
                                <input type="text" id="name" className="outline-none rounded-lg p-1" />
                            </div>
                            <div className="flex flex-col w-[350px]">
                                <label htmlFor="name">Preço:</label>
                                <input type="number" min={1} id="name" className="outline-none rounded-lg p-1" />
                            </div>
                            <div className="flex flex-col w-[350px]">
                                <label htmlFor="name">Descrição:</label>
                                <input type="text" id="name" className="outline-none rounded-lg p-1 w-full h-[200px] " />
                            </div>
                            <div className="flex flex-col w-[350px]">
                                <input type="" value={'Categoria'} id="name" className="outline-none rounded-lg p-1" />
                            </div>
                            <div className="flex flex-col w-[350px]">
                            <button type="submit" className="outline-none rounded-lg w-full bg-slate-400  "  >Carregar</button>
                            </div>
                            
                        </form>
                   </div>
               </div>
               <div className="w-full h-[1px] bg-[#00000029]" ></div> {/*Divider*/}
               <div className="flex flex-col gap-5 h-full text-[#787575]" >
                <p className="flex text-[20px] font-medium text-[#787575] ">Seus Produtos </p>
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

        </div>
    );
}