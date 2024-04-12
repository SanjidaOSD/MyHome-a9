import { useParams } from "react-router-dom";

const CardDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h2 className="text-3xl">this is card details</h2>
            <p>{id}</p>
            
        </div>
    );
};

export default CardDetails;