import UseAuth from "../../Hooks/UseAuth";
import { FcGoogle } from "react-icons/fc";


const GoogleLogin = () => {
    const {googleLogin} = UseAuth();

    
    
    return (
        <div>
        <button onClick={()=> googleLogin()} className="btn w-full hover: bg-slate-100 ">Log in with <FcGoogle></FcGoogle></button>
    </div>
    );
};

export default GoogleLogin;