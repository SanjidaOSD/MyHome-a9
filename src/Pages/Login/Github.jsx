import { Helmet } from "react-helmet";
import UseAuth from "../../Hooks/UseAuth";
import { FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify';


const Github = () => {
  const { githubLogin } = UseAuth();


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GitHub login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <button onClick={() => githubLogin()} className="btn w-full hover:bg-slate-100">Log in with <FaGithub /></button>
    </div>
  );
};

export default Github;