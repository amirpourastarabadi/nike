const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex flex-col justify-start
    sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl ps-10 py-16"
    >
        <div className="w-11 h-11 flex justify-center items-center
        bg-coral-red rounded-full">
            <img src={imgURL} alt={label}
            width={24} height={24} />
        </div>
        <h3 className="font-3xl font-bold font-palanquin
        mt-5 leading-normal">{label}</h3>
        <p className="mt-t break-words font-montserrat
        text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard
