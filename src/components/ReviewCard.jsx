import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="info-text mt-6 text-center max-w-sm">{feedback}</p>
      <div className="flex justify-center items-center mt-3 gap-2.5">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain"
        />
        <p className="font-montserrat text-slate-gray text-xl">({rating})</p>
      </div>
      <h3 className="text-3xl text-center mt-1 font-palanquin font-bold">
        {customerName}
      </h3>
    </div>
  )
}

export default ReviewCard
