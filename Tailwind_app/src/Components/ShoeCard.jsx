const ShoeCard = ({ imgURL, changeBigShoeImage, BigShoeImg }) => {
  const HandleClick = () => {
    if (BigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl 
      ${BigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"}
      cursor-pointer max-sm:flex-1
      `}
      onClick={HandleClick}
    >
      <div className="flex justify-center items-center bg-slate-400  bg-center bg-cover sm:w-40 sm:h-40 rounded-xl  max-sm:p-4">
        <img src={imgURL.thumbnail} alt="shoeCollection" width={127} height={103} className="object-contain" />
      </div>
    </div>
  );
};

export default ShoeCard;
