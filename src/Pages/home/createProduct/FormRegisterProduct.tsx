import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { registerProduct } from '@/services/register_product/api';


const schema = z.object({
  nome: z.string().min(1, 'Nome do produto é obrigatório'),
  preco: z.number().min(1, 'O preço deve ser no mínimo 1'),
  descricao: z.string().max(500, 'A descrição deve ter no máximo 500 caracteres'),
  categoria: z.string().min(1, 'Categoria é obrigatória'),
});

type FormData = z.infer<typeof schema>;

export const FormRegisterProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const response = await registerProduct(data);
    if (response.message === "Produto registrado com sucesso.") {
      alert('Produto registrado com sucesso!');
    } else {
      alert(response.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center shadow-xl rounded-2xl gap-4 w-[400px] bg-[#E3E2E2]">
      <div className="flex flex-col w-[350px]">
        <label htmlFor="nome">Produto:</label>
        <input type="text" id="nome" placeholder="Digite o nome do produto" className="outline-none rounded-lg p-2 focus:border border-[#B2935B]" {...register('nome')} />
        {errors.nome && <span className="text-red-500">{errors.nome.message}</span>}
      </div>
      <div className="flex flex-col w-[350px]">
        <label htmlFor="preco">Preço:</label>
        <input type="number" min={1} id="preco" placeholder="Digite o preço" className="outline-none rounded-lg p-2 focus:border border-[#B2935B]" {...register('preco', { valueAsNumber: true })} />
        {errors.preco && <span className="text-red-500">{errors.preco.message}</span>}
      </div>
      <div className="flex flex-col w-[350px]">
        <label htmlFor="descricao">Descrição:</label>
        <textarea id="descricao" className="outline-none rounded-lg p-2 w-full max-h-[200px] min-h-[200px] focus:border border-[#B2935B]" maxLength={500} {...register('descricao')} />
        {errors.descricao && <span className="text-red-500">{errors.descricao.message}</span>}
      </div>
      <div className="flex flex-col w-[350px]">
        <label htmlFor="categoria">Categoria:</label>
        <input type="text" id="categoria" className="outline-none rounded-lg p-2" {...register('categoria')} />
        {errors.categoria && <span className="text-red-500">{errors.categoria.message}</span>}
      </div>
      <div className="flex flex-col w-[350px]">
        <input type="submit" value="Cadastrar" className="cursor-pointer rounded-lg w-full h-[32px] text-[#787575] text-[20px] font-normal bg-white border border-[#B2935B]" />
      </div>
    </form>
  );
};
