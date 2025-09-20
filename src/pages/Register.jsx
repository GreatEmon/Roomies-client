import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../Context/AuthProvider'
import { GoogleAuthProvider } from 'firebase/auth'
import Swal from 'sweetalert2'
import Loading from '../component/Loading'

const Register = () => {
  document.title = "Register"
  const { register, user, setUser, logwGoogle, updateUser } = use(AuthContext)
  const [load, setLoad] = useState(false)
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    setLoad(true)
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    register(email, password).
      then(result => {
        const user = result.user
        updateUser({
          displayName: name,
          photoURL: photoURL
        }).then(() => {
          setUser(user)
        }).catch((error) => {
          Swal.fire({
          title: 'Error',
          text: 'Please check all the field',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        });

        
        setLoad(false)
        Swal.fire({
          title: 'Success',
          text: 'Register Successful',
          icon: 'success',
          confirmButtonText: 'Done'
        })
        navigate('/')
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoad(false)

        Swal.fire({
          title: 'Error',
          text: 'Please check all the field',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });

  }

  const handleGoogle = () => {
    logwGoogle().then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setUser(setUser)
      navigate('/')
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });  
  }



  return load ? <Loading></Loading> :(
    <div className='flex justify-center my-[135px]'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className='card-body'>
          <form onSubmit={handleRegister}>
            <h2 className='font-semibold text-2xl text-center py-5'>Register your account</h2>
            <fieldset className="fieldset space-y-2">
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name"
                name='name'
                required />

              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="Photo URL"
                name='photoURL'
                required />

              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email"
                name='email'
                required />

              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password"
                name='password'
                pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                required />
              <div className='text-[13px] list text-red-400 px-5'>
                <li>Must contain 1 lower case letter</li>
                <li>Must contain 1 Upper case letter</li>
                <li>Minimum 6 character</li>

              </div>

              <button className="btn bg-[#095943] text-white mt-4" type='submit'>Register</button>
              <p className=' text-center font-semibold'>Already Have An Account ? <Link to="/login" className='text-secondary py-2'>Login</Link></p>
            </fieldset>
          </form>
          <button className="btn bg-white text-black border-[#e5e5e5]" onClick={handleGoogle}>
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Register with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register