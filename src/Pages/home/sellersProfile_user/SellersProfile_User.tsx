
import { ListProdSellers } from "@/components/listProd-Sellers/ListProdSellers";
import { listProd } from "../firstPage/elementListOrSellers";
import { useRef } from "react";
import { BackButton } from "@/components/backButton/BackButton";
import { Divider } from "@/components/divider/Divider";
import { Profile } from "./ProfilePreview";
import { GoogleMapsPreview } from "./GoogleMapsPreview";

const customStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const SellersProfile_User=()=>{
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
       
        <div className="w-full h-full flex flex-col p-4 gap-0 " >
             <style>{customStyles}</style>
            <BackButton/>
            
            <div className="w-full h-full flex flex-col p-6 gap-5 " >

                <div className="w-full h-full flex justify-between"  >
                   <Profile/>
                   <GoogleMapsPreview/>
                </div>

               <Divider/>

               <div className="flex flex-col gap-5 h-full text-[#787575]">
                    <p className="flex text-[20px] font-medium text-[#787575] ">Listados Recentemente </p>
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