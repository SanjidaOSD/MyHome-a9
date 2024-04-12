import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';


const CardDetails = ({cards}) => {
        // const {state_title, image, segment_name, status} = cards;

    const {id} = useParams();
    return (
        <div>
            <h2 className="text-3xl">this is card details:</h2>
            <p>{id}</p>
            
        </div>
    );
};

export default CardDetails;
CardDetails.propTypes = {
    cards: PropTypes.node,
}