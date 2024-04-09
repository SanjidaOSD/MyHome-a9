import UseAuth from "../../Hooks/UseAuth";

const GoogleLogin = () => {
    const {googleLogin} = UseAuth();

    
    
    return (
        <div>
        <button onClick={()=> googleLogin()} className="btn w-full hover: bg-slate-100 ">Log in with Google</button>
    </div>
    );
};

export default GoogleLogin;