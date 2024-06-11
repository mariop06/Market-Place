

export const CardItems = () => {
    return (
      <div className="flex flex-row gap-1 w-[400px] h-[130px] border rounded-xl p-1">
        <div className="flex gap-2 w-full h-full rounded-xl p-2">
          <span className="w-[100px] h-[100px] bg-[#aaa4a492] inline-block rounded-xl" />
          <article className="w-[100%] h-[100%] text-[12px] text-justify">
            Description- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis maiores, rem consequuntur error tenetur illum. Perferendis aliquid dolor ad aut nam. Architecto ea officia suscipit, lore
          </article>
        </div>
        <div className="flex flex-col justify-between w-[40px] h-full rounded-xl p-2">
          <span className="w-[20px] h-[20px] bg-[#aaa4a492] inline-block rounded-xl" />
          <span className="w-[20px] h-[20px] bg-[#aaa4a492] inline-block rounded-xl" />
        </div>
      </div>
    );
  };
  