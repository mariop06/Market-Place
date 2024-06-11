import { ListProdSellers } from "@/components/listProd-Sellers/ListProdSellers";
import { sellers } from "../firstPage/elementListOrSellers";
import { ViewImageCards } from "./ViewImageCards";
import { ProdDetails } from "./ProdDetails";
import { useRef } from "react";
import { Divider } from "@/components/divider/Divider";
import { BackButton } from "@/components/backButton/BackButton";

const customStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const ProductDetails=()=>{
    const sellersContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (sellersContainerRef.current) {
            sellersContainerRef.current.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (sellersContainerRef.current) {
            sellersContainerRef.current.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
    };
    return(
        <div className="w-full h-full flex flex-col p-6 gap-5 " >
            <style>{customStyles}</style>
           <BackButton/>
           <div className="w-full h-full flex flex-col p-6 gap-10 " >
               
               <div  className="flex gap-36 " >
                   <ViewImageCards/>
                   <ProdDetails/>
               </div>
               
              <Divider/>

               <div className="flex flex-col gap-5 h-full text-[#787575]">
                    <p className="flex text-[20px] font-medium text-[#787575]">Vendedores Populares</p>
                    <div className="relative">
                        <button
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
                            onClick={scrollLeft}
                        >
                            &lt;
                        </button>
                        <div
                            className="flex overflow-x-auto gap-7 scrollbar-hide"
                            ref={sellersContainerRef}
                        >
                            {
                                sellers.map((element) => (
                                    <ListProdSellers
                                        key={element.path}
                                        ProductOrSellers={element.ProductOrSellers}
                                        Icon={element.Icon}
                                        path={element.path}
                                        control
                                    />
                                ))
                            }
                        </div>
                        <button
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
                            onClick={scrollRight}
                        >
                            &gt;
                        </button>
                    </div>
                </div>

           </div>

        </div>
    );
}