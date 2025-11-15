
import { Link } from 'react-router-dom';
import Input from '../../components/ui/Input';
import AuthSideSlider from '../../components/layout/AuthSideSlider';


export default function Login() {
 
 
  return (
    <div className='flex h-screen overflow-hidden'>
      <div className='w-[50%] flex flex-col justify-center items-center'>
        <h3 className='text-5xl font-bold text-black'>Log in</h3>  
        <p className='m-4 pb-1'>
          Enter your email and password as admin log in.       
        </p>

        <form className='flex flex-col gap-3 '>
          <Input
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />

          <Input 
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />
         <div className='flex flex-col gap-2.5 pt-8'>
           <Link to='/signup'><button type='submit' className='btn-primary'>Sign Up</button></Link>
           <button type='submit' className='btn-primary'>Login as user</button>
           <button type='submit' className='btn-primary'>Login as admin</button>
          </div>

        </form>
      </div>
      {/* <img src={loginImg} alt="" className=" object-cover" /> */}

      <div className='w-1/2 h-full'><AuthSideSlider/></div>

      </div>
  )
}
