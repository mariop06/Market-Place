import { BackButton } from "@/components/backButton/BackButton";
import { CardItems } from "./CardItems";
import { PaymentDetails } from "./PaymentDetails";


export const ShoppingBasket = () => {
  return (
    <div className="w-full h-full flex flex-col p-5 gap-0">
      <BackButton/>

      <div className="w-full h-full flex flex-col p-6 gap-5">
        <h1 className="text-[25px] text-black font-medium">Previsualização do Items</h1>
        <div className="flex w-full h-full gap-[20%]">
          <div className="flex flex-col gap-2">
            {[...Array(8)].map((_, index) => (
              <CardItems key={index} />
            ))}
          </div>
          <PaymentDetails total="5000kz" />
        </div>
      </div>
      
    </div>
  );
};
