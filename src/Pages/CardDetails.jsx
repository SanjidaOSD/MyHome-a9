import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";


const CardDetails = () => {
        // const {state_title, image, segment_name, status} = cards;
        const [cardsDetails, setCardsDetails] = useState([]);

        useEffect(() => {
            fetch('/data.json')
                .then(res => res.json())
                .then(data => setCardsDetails(data))
        }, []);

    const {id} = useParams();
    return (
        <div>
            <h2 className="text-3xl">this is card details:{cardsDetails.length}</h2>
            <p>{id}</p>
            {
                cardsDetails.map(cardDetail => <h2 key={cardDetail.id}>{cardDetail.status}</h2>)
            }
            
        </div>
    );
};

export default CardDetails;
CardDetails.propTypes = {
    cards: PropTypes.node,
}