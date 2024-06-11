import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';

// Definindo o esquema de validação com zod
const schema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
  role: z.string().min(0,'Selecione: Vendedor ou Comprador') ,//z.enum(['comprador', 'vendedor']),
  companyName: z.string().min(2, 'Nome da Empresa obrigatório')
});

type FormData = z.infer<typeof schema>;

export const Register = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    alert('Conta criada com sucesso!');
    navigate('/shopping');
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  };

  return (
    <div className="flex flex-col shadow-xl justify-start items-center border border-[#b2945b4d] rounded-2xl gap-2 w-[500px] h-[640px] pt-3 bg-white text-[#787575]">
      <h1 className="text-[25px] font-medium">Registro</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[80%] h-[95%] justify-around items-center">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col w-[350px]">
            <label htmlFor="nome">Nome Completo:</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite o seu nome"
              {...register('nome')}
              className="outline-none rounded-lg p-2 bg-gray-100 focus:border border-[#B2935B] focus:bg-white"
            />
            {errors.nome && <span className="text-red-500">{errors.nome.message}</span>}
          </div>
          <div className="flex flex-col w-[350px]">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Digite o seu email"
              {...register('email')}
              className="outline-none rounded-lg p-2 bg-gray-100 focus:border border-[#B2935B] focus:bg-white"
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col w-[350px]">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="Digite a sua senha"
              {...register('password')}
              className="outline-none rounded-lg p-2 bg-gray-100 focus:border border-[#B2935B] focus:bg-white"
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          <div className="flex flex-col gap-6 w-[350px]">
            <div className="flex flex-col w-[350px]">
              <label htmlFor="role">Tipo de Conta:</label>
              <select
                id="role"
                value={role}
                {...register('role')}
                onChange={handleRoleChange}
                className="outline-none rounded-lg p-2 bg-gray-100 focus:border border-[#B2935B] focus:bg-white"
              >
                {/* <option value="">Selecione</option> */}
                <option value="comprador">Comprador</option>
                <option value="vendedor">Vendedor</option>
              </select>
              {errors.role && <span className="text-red-500">{errors.role.message}</span>}
            </div>

            {role === 'vendedor' && (
              <div className="flex flex-col w-[350px]">
                <label htmlFor="companyName">Nome da Empresa:</label>
                <input
                  type="text"
                  id="companyName"
                  placeholder="Digite o nome da sua empresa"
                  {...register('companyName')}
                  className="outline-none rounded-lg p-2 bg-gray-100 focus:border border-[#B2935B] focus:bg-white"
                />
                {errors.companyName && <span className="text-red-500">{errors.companyName.message}</span>}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col w-[350px]">
          <input
            type="submit"
            value="Cadastrar"
            className="cursor-pointer rounded-lg w-full h-[32px] text-[#787575] text-[20px] font-normal bg-white border border-[#B2935B]"
          />
        </div>
      </form>
    </div>
  );
};
