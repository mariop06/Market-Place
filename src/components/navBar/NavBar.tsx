import { useNavigate } from "react-router-dom";
import { dateNavBar } from "./navProps";
import { InputButton } from "./ButtonNavBar";
import { useContext } from "react";
import { AuthContext } from "@/Pages/auth/login/AuthContext";


export const NavBar = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext); // Utilizando o contexto para acessar o token

  return (
    <div className="bg-white w-full max-h-max p-2 mb-3 text-[#787575] gap-3 flex flex-col justify-center shadow-lg">
      <div className={`flex flex-row  ${token ? 'justify-between' : 'justify-center'}`}>
        <div className="shadow-sm rounded-full justify-center"  >
          <img src="logo.png" className="size-[90px] cursor-pointer " onClick={()=>navigate('/shopping')} />
        </div>
        {token && (
          <div className="flex gap-6 justify-center items-center">
            <div className="flex gap-6">
              <InputButton value="Sign up" onClick={() => navigate('/shopping')}  />
              <InputButton value="Login" onClick={() => navigate('/auth/login')} controller />
            </div>
          </div>
        )}
      </div>
      <div className="border-b m-0" />
      <div className="flex flex-row gap-3 justify-between">
        <div className="flex flex-row gap-10 justify-center">
          {dateNavBar.map((element) => (
            <button onClick={() => navigate(element.path)}>{element.name}</button>
          ))}
        </div>
        <div className="flex gap-6 justify-center">
         
          <button onClick={() => navigate('/shopping/basket')}>Cesto de Compra</button> {/*Icon Cesto! */}
          {
            !token && (
              <>
                <InputButton value="Sell Items" onClick={() => navigate('/product/create')}  />
                <button onClick={() => navigate('/auth/profile')}>profile</button> 
              </>
               
            )
          }
          
        </div>
      </div>
    </div>
  );
};
