

export const ShoppingBasket=()=>{
    return(
        <div className="w-full h-full flex flex-col p-5 gap-0 " >
            <div>back</div> 
           <div className="w-full h-full flex flex-col p-6 gap-5 " >
               <h1 className="text-[25px] text-black font-medium" >Previsualização do Items</h1>

               <div  className="flex w-full h-full gap-[20%] " >
                   <div className="flex flex-col gap-2" >
                        <CardItems/>
                        <CardItems/>
                        <CardItems/>
                        <CardItems/>
                        <CardItems/>
                        <CardItems/>
                        <CardItems/>
                        <CardItems/>
                   </div>
                   <div className="flex flex-col gap-3 bg-[#E3E2E2] w-[400px] h-[380px] p-5 rounded-xl shadow-xl  ">
                        <h1 className="text-[25px] text-black font-medium" >Detalhes de Pagamento</h1>

                        <form action="" className="flex flex-col gap-3 justify-center items-start ">
                            <div className="flex flex-col w-[350px]">
                                <label htmlFor="name">Nome:</label>
                                <input type="text" id="name" className="outline-none rounded-lg p-1" />
                            </div>
                            <div className="flex flex-col w-[350px]">
                                <label htmlFor="name">Card Number:</label>
                                <input type="number" min={1} id="name" className="outline-none rounded-lg p-1" />
                            </div>
                            <div className="flex flex-col w-[350px]">
                                <label htmlFor="name">Código:</label>
                                <input type="password" id="name" className="outline-none rounded-lg p-1" />
                            </div>
                            <div className="flex flex-col w-[350px]">
                                <label htmlFor="">Total a pagar : 5000kz</label>
                            </div>
                            <div className="flex flex-col w-[350px]">
                            <button type="submit" className="outline-none rounded-lg w-full bg-slate-400  "  >Pagar</button>
                            </div>
                            
                        </form>
                   </div>
               </div>
            </div>

        </div>
    );
}


export const CardItems=()=>{
    return(
        <div className=" flex flex-row gap-1 w-[400px] h-[130px] border rounded-xl p-1" >
            <div className="flex gap-2 w-full h-full rounded-xl p-2" >
                <span className="w-[100px] h-[100px] bg-[#aaa4a492] inline-block rounded-xl "/>
                <article className=" w-[100%] h-[100%] text-[12px] text-justify" >Description- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis maiores, rem consequuntur error tenetur illum. Perferendis aliquid dolor ad aut nam. Architecto ea officia suscipit, lore</article>
            </div>
            <div className="flex flex-col justify-between  w-[40px] h-full rounded-xl p-2" >
                <span className="w-[20px] h-[20px] bg-[#aaa4a492] inline-block rounded-xl "/>
                <span className="w-[20px] h-[20px] bg-[#aaa4a492] inline-block rounded-xl "/>
            </div>
        </div>
    );
}