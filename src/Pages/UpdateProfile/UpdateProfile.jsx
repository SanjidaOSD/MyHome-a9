import { useForm } from "react-hook-form";
import auth from "../../Firebase/Firebase.config";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
// import UseAuth from "../../Hooks/UseAuth";

const UpdateProfile = () => {
    // const { updateProfile } = UseAuth();



    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm()

    const onSubmit = data => {
        const { email, name, photo } = data;
        console.log(photo)

        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
             email: email
          })
          .then(result => {
            console.log(result);
            // toast.success('User created successfully')


        })
    }

    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className="text-3xl text-center mt-6 mb-6 font-bold">Update Your Profile</h2>
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

                    <div className="form-control mt-6">
                        <button className="btn btn-primary hover:bg-slate-800 hover:text-white  bg-slate-400">Update</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateProfile;