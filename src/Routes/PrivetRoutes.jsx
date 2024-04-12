import UseAuth from "../Hooks/UseAuth";
import{Navigate, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';



const PrivetRoutes = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation();
    console.log(location.pathname)

if(loading){
   return <span className="loading loading-dots loading-lg"></span>

}

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivetRoutes;
PrivetRoutes.propTypes = {
    children: PropTypes.node,
}