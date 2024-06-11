


export const Profile=()=>{
    return(
        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-start gap-10" >
                <div className="flex justify-center items-center gap-3 cursor-pointer">
                    <span className="bg-[#E3E2E2] w-[50px] h-[50px] rounded-full inline-block " />
                    <h1 className="text-[25px] font-medium  text-[#000000] " >Debby Space</h1>
                </div>

                <article className="max-w-[400px] max-h-max p-3 text-justify " >Description- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex iusto labore blanditiis quas animi architecto porro, ad nesciunt pariatur dicta sequi reiciendis deserunt cum amet fugit, quod, maxime ea commodi. </article>

            </div>
            <div className="flex  items-center  gap-10 " >
                <input type="button" value="Add aos Favoritos"  className={`cursor-pointer rounded-[100px]   w-[200px] h-[32px]  text-[#787575] text-[20px] font-normal bg-white border border-[#D9D226]`} />
                <span className="bg-[#E3E2E2] w-[45px] h-[45px] rounded-full flex justify-center items-center cursor-pointer " >Like</span>
            </div>
        </div>
    )
}