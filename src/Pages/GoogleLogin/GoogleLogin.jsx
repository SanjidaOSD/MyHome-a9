import { Helmet } from "react-helmet";
import UseAuth from "../../Hooks/UseAuth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";


const GoogleLogin = () => {
    const {googleLogin} = UseAuth();


    const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/';

  const handleGoogleLogin = socialProvider => {
    socialProvider()
      .then(result => {
        if (result.user) {
          navigate(from)
        }
      })
  }

    
    
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Google log in</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <button onClick={()=> handleGoogleLogin(googleLogin)} className="btn w-full hover: bg-slate-100 ">Log in with <FcGoogle></FcGoogle></button>
    </div>
    );
};

export default GoogleLogin;