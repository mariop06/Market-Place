
interface IPropsButton{
    value:string;
    controller?:boolean;
    onClick:()=>void;

}

export const InputButton=({value,controller,onClick}:IPropsButton)=>{
    return(
        <input type="button" value={value}  className={`cursor-pointer rounded-[100px]   w-[100px] h-[28px]  ${controller? ' text-[#FFFF] bg-[#B2935B]':' text-[#787575] bg-white border border-[#B2935B]'}`}
        onClick={onClick}
        />
    );
}