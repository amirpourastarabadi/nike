import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
    return (
        <div className="flex justify-center 
        flex-wrap gap-9 max-container">
            {services.map(service => (
                <ServiceCard key={service.label} {...service}/>
            ))}
        </div>
    )
}

export default Services;