import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useContext } from "react";
import { AuthContext } from "./AuthContext"; // Importando o contexto

// Definindo o esquema de validação com zod
const schema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext); // Utilizando o contexto para atualizar o token
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    setToken(false); // Atualizando o token
    navigate('/shopping');
  };

  return (
    <div className="flex flex-col shadow-xl justify-start items-center border border-[#b2945b4d] rounded-2xl gap-5 w-[500px] h-[400px] pt-3 bg-white text-[#787575]">
      <h1 className="text-[25px] font-medium">Entrar</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[80%] h-[60%] justify-between items-center"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col w-[350px]">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Digite o seu email"
              className="outline-none rounded-lg p-2 bg-gray-100 focus:border border-[#B2935B] focus:bg-white"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col w-[350px]">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="Digite a sua senha"
              className="outline-none rounded-lg p-2 bg-gray-100 focus:border border-[#B2935B] focus:bg-white"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col w-[350px]">
          <input
            type="submit"
            value="Pagar"
            className="cursor-pointer rounded-lg w-full h-[32px] text-[#787575] text-[20px] font-normal bg-white border border-[#B2935B]"
          />
        </div>
      </form>
    </div>
  );
};
