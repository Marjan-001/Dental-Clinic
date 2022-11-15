import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = data => {

        console.log(data);
    }

    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl'>Signup</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Your Name</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("name", { required: "Your Name is required" })} />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("email", { required: "Email Address is required" })} />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>


                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {
                            required:
                                'Password is required',

                            minLength: {
                                value: 6, message: 'Password must be 6 characters or longer',
                            },
                            pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$/, message: 'password must contain atleast one uppercase and lower case letter and a special character and digit' }
                        })} />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password</span></label>
                    </div>




                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                </form>
                <p>Already hav an account?<Link className='text-primary' to='/login'>Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;