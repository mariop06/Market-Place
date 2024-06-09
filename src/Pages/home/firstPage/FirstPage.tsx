import { useRef } from "react";
import { ListProdSellers } from "@/components/listProd-Sellers/ListProdSellers";
import { Panel } from "@/components/panel/Panel";
import { sellers, listProd } from "./elementListOrSellers";

// Adicione uma classe utilitária ao Tailwind para esconder a barra de rolagem
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
                left: -200, // Adjust the value to scroll by more or less
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (sellersContainerRef.current) {
            sellersContainerRef.current.scrollBy({
                left: 200, // Adjust the value to scroll by more or less
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

/*

import { ListProdSellers } from "@/components/listProd-Sellers/ListProdSellers"
import { listProd } from "../firstPage/elementListOrSellers"
import { useRef } from "react";


const customStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const Category=()=>{
    const sellersContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (sellersContainerRef.current) {
            sellersContainerRef.current.scrollBy({
                left: -200, // Adjust the value to scroll by more or less
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (sellersContainerRef.current) {
            sellersContainerRef.current.scrollBy({
                left: 200, // Adjust the value to scroll by more or less
                behavior: 'smooth'
            });
        }
    };


    return(
        <div className="flex flex-col gap-2">
            <style>{customStyles}</style>
            <h2  className="flex text-[25px] font-normal text-[#787575] " >Category</h2>
            
            <div className="relative " >
                <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
                        onClick={scrollLeft}
                >
                        &lt;
                </button>
                <div  className="  flex overflow-x-auto gap-5 scrollbar-hide"
                        ref={sellersContainerRef} >
                    {
                        category.map((element)=>(<div className="bg-[#E3E2E2] w-[300px] h-[180px]  text-[#1f1e1e] text-[25px] font-semibold rounded-xl shadow-xl flex justify-center items-center cursor-pointer " >{element.value}</div>))         
                    }
                </div>
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
                        onClick={scrollRight}
                    >
                        &gt;
                    </button>
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
    {
        value:'Tops'
    },

]
*/