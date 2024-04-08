import { createContext } from "react";
import PropTypes from 'prop-types';



 export const AuthContext = createContext(null);

const ContextProvider = ({children}) => {

    // create user

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;
ContextProvider.propTypes = {
    children: PropTypes.node,
}