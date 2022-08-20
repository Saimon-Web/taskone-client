import { signOut } from 'firebase/auth';
import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// import './Login.css'
import auth from '../../firebase.init';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const { register, handleSubmit, formState: { errors } } = useForm();
      const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  
      let navigate = useNavigate();
      let location = useLocation();
      let from = location.state?.from?.pathname || "/";   
    
      if(user){
        navigate(from, { replace: true });
      }

      let signerror;
      if (error) {
          signerror = <p className='text-danger'>{error.message}</p>
      }
      const onSubmit = async data => {
        const email = data.email
        const password = data.password
        signInWithEmailAndPassword(email, password)
    };
   
    return (
        <div>
           <div className='mb-5'>
         
           </div>
            <div className="container mt-5">
                <div className="row mx-auto ">
                    <div className="col-2"></div>
                    <div className="col-lg-4 border">
                        <h1 className='fs-3 mt-5 text-center fw-bold text-warning'> Login your account </h1>
                        <img className='img-fluid' src="https://tf.quomodosoft.com/antech/wp-content/uploads/2022/07/Illustration.png" alt="" />
                        <p className='text-primary text-center '>You dont have an any account?<Link className='text-decoration-none' to='/register'> <span className='fw-bold text-warning'> Register</span></Link></p>
                    </div>
                    <div className='col-lg-4 border bg-white pt-5 pb-5 d-flex justify-content-center flex-column align-items-center'>
                        <h2 className='text-warning fw-bold fs-3  '>Login  Account</h2>

                        <form className='mt-3' action="" onSubmit={handleSubmit(onSubmit)}>
                           
                            <label htmlFor="">Email</label> <br />
                           
                            <input className='pe-5 ps-2 pt-1 pb-1 mb-2  w-100'
                                type="email"
                                placeholder=' Email'
                                name='email'
                                {...register("email", { required: "Email Address is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'This is not a valid email' } })}
                            /> <br />

                            <p className='text-danger'>{errors.email?.message}</p>
                            <br />

                            <label htmlFor="">Password</label> <br />
                          
                            <input className='pe-5 ps-2 pt-1 pb-1 w-100'
                                type="password"
                                placeholder='Password'
                                name='password'
                                {...register("password", {
                                    required: "password is required",
                                    minLength: { value: 8, message: 'Minimum eight characters, at least one letter and one number' }
                                })
                                }

                            />
                            <br />
                            <button className='btn btn-warning w-100 mt-4' type="submit">Login</button>
                            {signerror}
                        </form>
                      <div className='d-flex mt-4'>
                        <div className="line"></div>
                        <p className='or'>or</p>
                        <div className="line"></div>
                      </div>
                      <div className='d-flex flex-column mb-2'>
                        <button  onClick={() => signInWithGoogle()}  className='btn btn-primary mb-2'>Continue with Google</button>
                        <button className='btn btn-warning'>Continue with Facebook</button>
                      </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;