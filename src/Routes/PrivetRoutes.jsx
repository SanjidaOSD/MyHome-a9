import UseAuth from "../Hooks/UseAuth";
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';



const PrivetRoutes = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation();
    console.log(location.pathname)

    if (loading) {
        return <span className="loading items-center justify-center ml-[200px] mt-[50px] md:ml-[550px] md:mt-[200px] loading-dots loading-lg"></span>

    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/emailLogin'></Navigate>;
};

export default PrivetRoutes;
PrivetRoutes.propTypes = {
    children: PropTypes.node,
}