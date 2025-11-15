
import { Link } from 'react-router-dom';
import Input from '../../components/ui/Input';
import AuthSideSlider from '../../components/layout/AuthSideSlider';


export default function SignUp() {


  return (
    <div className='flex h-screen overflow-hidden '>
      <div className='w-[50%] flex flex-col justify-center items-center'>
        <h3 className='text-4xl font-bold text-black'>Sign Up</h3>
        <p className='m-2 '>
          Enter your email and password to Sign Up.
        </p>

        <form className='flex flex-col gap-3 '>
          <Input
            label="Name"
            placeholder="Write here..."
            type="text"
          />
          <Input
            label="Company Name"
            placeholder="Your Company Name"
            type="text"
          />
          <Input
            label="Email"
            placeholder="Write here..."
            type="text"
          />
          <Input
            label="Password"
            placeholder="Enter password"
            type="password"
          />

          <Input
            label="Confirm Password"
            placeholder="Enter Confirm password"
            type="password"
          />
          <div className='pt-6'>
            <Link to='/login'><button type='submit' className='btn-primary '>Sign Up</button></Link>
          </div>

        </form>
      </div>

      {/* <img src={loginImg} alt="" className="w-1/2 h-full object-cover" /> */}
      <div className='w-1/2 h-full'><AuthSideSlider/></div>
      

    </div>
  )
}
