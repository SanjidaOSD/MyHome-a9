import { Helmet } from "react-helmet";
import UseAuth from "../../Hooks/UseAuth";
import { FcGoogle } from "react-icons/fc";


const GoogleLogin = () => {
    const {googleLogin} = UseAuth();

    
    
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Google log in</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <button onClick={()=> googleLogin()} className="btn w-full hover: bg-slate-100 ">Log in with <FcGoogle></FcGoogle></button>
    </div>
    );
};

export default GoogleLogin;