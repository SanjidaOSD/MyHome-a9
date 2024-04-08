import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
             <h2 className="text-3xl text-center mt-6 mb-6 font-bold">Please Register</h2>
            <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" placeholder="name" name="name" className="input input-bordered  bg-slate-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="photo" placeholder="photo" name="photo" className="input input-bordered  bg-slate-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered  bg-slate-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered bg-slate-200" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary hover:bg-slate-800 hover:text-white  bg-slate-400">Login</button>
                    </div>
                </form>
                <p className="text-center mb-4">All ready have an account! <Link to='/login' className="text-blue-700">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;