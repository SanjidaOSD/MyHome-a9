import UseAuth from "../../Hooks/UseAuth";

const Github = () => {

const {githubLogin} = UseAuth();


return (
  <div>
    <button onClick={()=>githubLogin()} className="btn w-full hover: bg-slate-100 ">Log in with Github</button>
  </div>
);
};

export default Github;