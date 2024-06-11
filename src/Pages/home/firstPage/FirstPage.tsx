import { useRef } from "react";
import { ListProdSellers } from "@/components/listProd-Sellers/ListProdSellers";
import { Panel } from "@/components/panel/Panel";
import { sellers, listProd } from "./elementListOrSellers";


const customStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const FirstPage: React.FC = () => {
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

    return (
        <div className="w-full h-full p-8 flex flex-col gap-10">
            <style>{customStyles}</style>
            <Panel value="Encontre Aqui !" controller />

            <div className="flex flex-col gap-5 h-full text-[#787575]">
                <p className="flex text-[20px] font-medium text-[#787575]">Listados Recentemente</p>
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
    );
}
