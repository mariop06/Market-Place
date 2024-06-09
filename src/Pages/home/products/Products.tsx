import { Panel } from "@/components/panel/Panel";
import { Category } from "./Category";

export const Products=()=>{
    return(
        <div className='w-full h-full flex flex-col gap-5 p-5' >
            <Panel value="Artigos" />

            <Category/>
        </div>
    );
}
