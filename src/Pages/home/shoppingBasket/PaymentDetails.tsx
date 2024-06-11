


export const PaymentDetails : React.FC<{ total: string }> = ({ total }) => {
    return (
      <div className="flex flex-col gap-3 bg-[#E3E2E2] w-[400px] h-[420px] p-5 rounded-xl shadow-xl">
        <h1 className="text-[25px] text-black font-medium">Detalhes de Pagamento</h1>


        <form className="flex flex-col gap-4 justify-center items-center">
            
          <div className="flex flex-col w-[350px]">
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" placeholder="Digite o seu nome" className="outline-none rounded-lg p-2 focus:border border-[#B2935B]" />
          </div>

          <div className="flex flex-col w-[350px]">
                <label htmlFor="card-number">Card Number:</label>
                <input type="number" min={1} maxLength={15} id="card-number" placeholder="Digite o numero do Cartão" className="outline-none rounded-lg p-2 focus:border border-[#B2935B]"/>
          </div>

          <div className="flex flex-col w-[350px]">
            <label htmlFor="code">Código:</label>
            <input type="password" id="code"  placeholder="Digite a senha" className="outline-none rounded-lg p-2 focus:border border-[#B2935B]" />
          </div>
          <div className="flex flex-col w-[350px]">
            <label>Total a pagar : {total}</label>
          </div>
          <div className="flex flex-col w-[350px]">
          <input type="button" value="Pagar"  className={`cursor-pointer rounded-lg w-full h-[32px]  text-[#787575] text-[20px] font-normal bg-white border border-[#B2935B]`} />
          </div>
        </form>
      </div>
    );
  };
  


//   <form action="" className="flex flex-col justify-center items-center shadow-xl rounded-2xl gap-4 w-[400px] bg-[#E3E2E2] ">
//   <div className="flex flex-col w-[350px]">
//      
//   </div>
//   <div className="flex flex-col w-[350px]">
//       <label htmlFor="name">Preço:</label>
//       <input type="number" min={1} id="name" placeholder="Digite o preço" className="outline-none rounded-lg p-2 focus:border border-[#B2935B]" />
//   </div>
//   <div className="flex flex-col w-[350px]">
//       <label htmlFor="name">Descrição:</label>
//       <textarea className="outline-none rounded-lg p-2 w-full max-h-[200px] min-h-[200px] focus:border border-[#B2935B] " maxLength={500}/>
//   </div>
//   <div className="flex flex-col w-[350px]">
//       <label htmlFor="name">Categoria:</label>
//       <input type="" id="name" className="outline-none rounded-lg p-2" />
//   </div>

//   <div className="flex flex-col w-[350px]">
//   <input type="button" value="Cadastrar"  className={`cursor-pointer rounded-lg w-full h-[32px]  text-[#787575] text-[20px] font-normal bg-white border border-[#B2935B]`} />
//   </div>
// </form>