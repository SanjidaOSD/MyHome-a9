import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { toast } from 'react-toastify';


const EmailLogin = () => {

    const { signInUser } = UseAuth();
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location)


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = data => {
        // console.log(data)
        const { email, password } = data;

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('User created successfully')

                navigate(location?.state ? location.state : '/');

                // Handle successful sign-in (e.g., redirect user)
            })
            .catch(error => {
                console.log(error);
                toast.error('Failed to sign in. Please try again.');

            })
    }

    return (
        <div>
            <h2 className="text-3xl text-center mt-6 mb-6 font-bold">Login Form</h2>
            <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl p-4">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered  bg-slate-200" required
                            {...register("email", { required: true })}
                        />
                      {errors.email && <span className="text-red-800">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="password"
                                name="password"
                                className="input input-bordered w-full bg-slate-200"
                                required
                                {...register("password", { required: true })}
                            />
                            <span className="absolute top-4 right-3" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                            {errors.password && <span className="text-red-800">This field is required</span>}
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary hover:bg-slate-800 hover:text-white  bg-slate-400">Login</button>
                    </div>
                </form>
                <p className="text-center mb-4">Don't have an account! <Link to='/register' className="text-blue-700">Register</Link></p>

            </div>
        </div>
    );
};

export default EmailLogin;