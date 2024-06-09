import { useNavigate } from "react-router-dom";

interface IPropsListOrSellers {
    ProductOrSellers: string;
    Icon?: string;
    Price?: string;
    controller?: boolean;
    control?: boolean;
    path: string;
}

export const ListProdSellers: React.FC<IPropsListOrSellers> = ({ ProductOrSellers: Product, Price, Icon, controller, control, path }) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-5 text-[#787575]">
            {
                controller && (<Card Product={Product} Price={Price} Icon={Icon} onClick={() => navigate(path)} controller />)
            }
            {
                control && (<Card Product={Product} Price={Price} Icon={Icon} onClick={() => navigate(path)} />)
            }
        </div>
    );
}

interface IPropsCardDate {
    Product: string;
    Icon?: string;
    Price?: string;
    controller?: boolean;
    onClick?: () => void;
}

export const Card: React.FC<IPropsCardDate> = ({ Product, Price, controller, Icon, onClick }) => {
    return (
        <div className="max-w-max max-h-max flex flex-col gap-1">
            <div className="bg-[#E3E2E2] w-[200px] h-[220px] rounded-xl shadow-xl cursor-pointer" onClick={onClick}></div>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between text-[15px]">
                    <span onClick={onClick} className='cursor-pointer'>{Product}</span>
                    <span>{Icon}</span>
                </div>
                {
                    controller && (<span className="flex text-[15px] font-semibold">{Price}</span>)
                }
            </div>
        </div>
    )
}
