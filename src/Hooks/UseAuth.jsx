import { useContext } from "react";
import { AuthContext } from "../ContextProvider/ContextProvider";

const UseAuth = () => {
    const all = useContext(AuthContext)
    return all
};

export default UseAuth;