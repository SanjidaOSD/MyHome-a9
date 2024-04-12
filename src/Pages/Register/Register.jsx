import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// import { ToastContainer, toast } from 'react-toastify';


const Register = () => {
    const [registerError, setRegisterError] = useState(' ');
    const [success, setSuccess] = useState(' ');
    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = UseAuth();


    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm()


    const onSubmit = data => {

        //  console.log(data)
        const { email, password } = data;

        if (password.length < 6) {
            setRegisterError('password should be at-least 6 character or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have one upper case character')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have one lower case character')
            return;
        }


        setRegisterError('');
        setSuccess('');

        createUser(email, password)


            .then(result => {
                console.log(result.user)
                setSuccess('User created successfully')

            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message);
            })

    }

    return (
        <div>
            <h2 className="text-3xl text-center mt-6 mb-6 font-bold">Please Register</h2>
            <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" placeholder="name" name="name" className="input input-bordered  bg-slate-200"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className="text-red-800">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="photo" placeholder="photo" name="photo" className="input input-bordered  bg-slate-200"
                            {...register("photo")}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered  bg-slate-200"
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
                                placeholder="password" name="password"
                                className="input input-bordered w-full bg-slate-200"
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
                  <div className="flex gap-2">
                  <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Accept our terms and condition</label>
                  </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary hover:bg-slate-800 hover:text-white  bg-slate-400">Register</button>
                    </div>
                </form>
                {
                    registerError && <p className="text-red-800 p-4">{registerError}</p>
                }
                {
                    success && <p className="text-green-700 text-center">{success}</p>
                }
                <p className="text-center mb-4">All ready have an account! <Link to='/login' className="text-blue-700">Login</Link></p>
            </div>
            {/* <ToastContainer /> */}

        </div>
    );
};

export default Register;