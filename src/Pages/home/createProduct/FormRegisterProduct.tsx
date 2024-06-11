
export const FormRegisterProduct=()=>{
    return(
        <form action="" className="flex flex-col justify-center items-center shadow-xl rounded-2xl gap-4 w-[400px] bg-[#E3E2E2] ">
            <div className="flex flex-col w-[350px]">
                <label htmlFor="name">Produto:</label>
                <input type="text" id="name" placeholder="Digite o nome do produto" className="outline-none rounded-lg p-2 focus:border border-[#B2935B]" />
            </div>
            <div className="flex flex-col w-[350px]">
                <label htmlFor="name">Preço:</label>
                <input type="number" min={1} id="name" placeholder="Digite o preço" className="outline-none rounded-lg p-2 focus:border border-[#B2935B]" />
            </div>
            <div className="flex flex-col w-[350px]">
                <label htmlFor="name">Descrição:</label>
                <textarea className="outline-none rounded-lg p-2 w-full max-h-[200px] min-h-[200px] focus:border border-[#B2935B] " maxLength={500}/>
            </div>
            <div className="flex flex-col w-[350px]">
                <label htmlFor="name">Categoria:</label>
                <input type="" id="name" className="outline-none rounded-lg p-2" />
            </div>

            <div className="flex flex-col w-[350px]">
            <input type="button" value="Cadastrar"  className={`cursor-pointer rounded-lg w-full h-[32px]  text-[#787575] text-[20px] font-normal bg-white border border-[#B2935B]`} />
            </div>
        </form>
    )
}