import { useState } from "react"


export const Profile=()=>{
    const [edit,setEdit]=useState(false)
    return(
        <div className={`flex justify-center items-center shadow-xl rounded-2xl  border border-[#b2945b4d]  p-3 bg-white text-[#787575] ${edit? 'w-[55%] h-[85%] justify-between':'w-[25%] h-[85%]'}`}>
            <div className="flex flex-col w-[400px] h-full justify-between"  >
                <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                    <span className="bg-[#E3E2E2] w-[80px] h-[80px] rounded-full inline-block " />
                    <h1 className="text-[20px] font-medium  text-[#000000] " >Debora Pombal</h1>
                </div>

                <div className="flex flex-col gap-6">
                    <h1 className="text-[18px] font-medium">Suas Informações</h1>
                    <div className="flex flex-col">
                        <label className="flex gap-2 items-center">Nome: 
                            <span className="text-[15px] font-medium  text-[#000000]">Debora Pombal</span>
                         </label>
                       <label className="flex gap-2 items-center">Email: 
                            <span className="text-[15px] font-medium  text-[#000000]">Debora Pombal</span>
                         </label>
                       <label className="flex gap-2 items-center">Senha: 
                            <span className="text-[15px] font-medium  text-[#000000]">Debora Pombal</span>
                         </label>
                       <label className="flex gap-2 items-center">Tipo de Perfil: 
                            <span className="text-[15px] font-medium  text-[#000000]">Debora Pombal</span>
                         </label>
                    </div>

                    <div>
                        <h1 className="text-[18px] font-medium ">Loja</h1>
                        <span className="text-[15px] font-medium  text-[#000000]">Debby Space</span>
                    </div>
                </div>

                <div className="flex justify-center gap-10">
                    <input
                        type="submit"
                        value="Editar"
                        className="cursor-pointer rounded-full w-full h-[32px] text-[#787575] text-[20px] font-normal bg-white border border-[#B2935B]"
                        onClick={()=>setEdit(!edit)}
                    />
                    <input
                        type="submit"
                        value="Terminar Sessão"
                        className="cursor-pointer rounded-full w-full h-[32px] text-[#787575] text-[20px] font-normal bg-white border border-[#B2935B]"
                    />
                </div>
            </div>
            {
                edit && (
                    <>
                    <div className="flex flex-col  w-[400px] h-full items-center justify-around gap-20 bg-slate-300">
                        
                            <div>
                                <div className="flex flex-col w-[350px]">
                                    <label htmlFor="nome">Nome Completo:</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        placeholder="Digite o seu nome"
                                        className="outline-none rounded-lg p-2 bg-gray-100 focus:border border-[#B2935B] focus:bg-white"
                                    />
                                </div>
                                <div className="flex flex-col w-[350px]">
                                    <label htmlFor="nome">Nome da Empresa:</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        placeholder="Digite o seu nome"
                                        className="outline-none rounded-lg p-2 bg-gray-100 focus:border border-[#B2935B] focus:bg-white"
                                    />
                                </div>
                                <div className="flex flex-col w-[350px]">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Digite o seu email"
                                    className="outline-none rounded-lg p-2 bg-gray-100 focus:border border-[#B2935B] focus:bg-white"
                                />
                                </div>
                                <div className="flex flex-col w-[350px]">
                                <label htmlFor="password">Senha:</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Digite a sua senha"
                                    className="outline-none rounded-lg p-2 bg-gray-100 focus:border border-[#B2935B] focus:bg-white"
                                />
                                </div>
                            </div>

                            <div className="flex items-center w-[90%]  gap-10">
                                <input
                                    type="submit"
                                    value="Gravar"
                                    className="cursor-pointer rounded-lg w-full h-[32px] text-[#787575] text-[20px] font-normal bg-white border border-[#B2935B]"
                                />
                                <input
                                    type="submit"
                                    value="Cancelar"
                                    className="cursor-pointer rounded-lg w-full h-[32px] text-[#787575] text-[20px] font-normal bg-white border border-[#B2935B]"
                                />
                            </div>
                    </div>
                    
                    </>
                    
                )
            }
        </div>
    )
}