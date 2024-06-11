import { useNavigate } from "react-router-dom"




export const Login = ()=>{
    const navigate = useNavigate();

    return (
        <div className="flex flex-col shadow-xl justify-start items-center border border-[#b2945b4d]  rounded-2xl gap-5 w-[500px] h-[400px] pt-3 bg-white text-[#787575]" >
             <h1 className="text-[25px]  font-medium">Entrar</h1>

            <form className="flex flex-col w-[80%]  h-[60%] justify-between items-center ">
                <div className="flex flex-col gap-5">
                    
                    <div className="flex flex-col w-[350px]">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" placeholder="Digite o seu email" className="outline-none rounded-lg p-2  bg-gray-100 focus:border border-[#B2935B] focus:bg-white" />
                    </div>
                    <div className="flex flex-col w-[350px]">
                            <label htmlFor="card-number">Senha:</label>
                            <input type="password" id="password" placeholder="Digite a sua senha" className="outline-none rounded-lg p-2 bg-gray-100 focus:border border-[#B2935B] focus:bg-white"/>
                    </div>
                </div>
                
                <div className="flex flex-col w-[350px]">
                   <input type="button" value="Pagar"  className={`cursor-pointer rounded-lg w-full h-[32px]  text-[#787575] text-[20px] font-normal bg-white border border-[#B2935B]`} 
                    onClick={()=>navigate('/shopping')}
                   />
                </div>
            </form>
        </div>
    )
}