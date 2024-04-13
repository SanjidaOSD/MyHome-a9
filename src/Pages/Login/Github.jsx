import UseAuth from "../../Hooks/UseAuth";
import { FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify';


const Github = () => {
  const { githubLogin } = UseAuth();


  return (
    <div>
      <button onClick={() => githubLogin()} className="btn w-full hover:bg-slate-100">Log in with <FaGithub /></button>
    </div>
  );
};

export default Github;