import { Button, Label, TextInput } from 'flowbite-react';
import {Link} from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/* {LEFT} */}
      <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Sahand's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>    


      {/* {RIGHT } */}
         <div className='flex-1'>
          <form>
            <div className='flex flex-col gap-4'>
              <Label value='Your Username'/>
              <TextInput placeholder='Enter your username' id='username ' />
            </div>
            <div className=''>
              <Label value='Your Email'/>
              <TextInput placeholder='Enter your email' id='email' />
            </div>
            <div className=''>
              <Label value='Your Password'/>
              <TextInput placeholder='Enter your password' id='password' />
            </div> 
            <div className='mt-5'>
            <Button gradientDuoTone='purpleToPink' type='submit' value='Sign Up'cl > Sign Up
            </Button>
            </div>
           

          </form>
          <div className='flex gap-2 text-sm mt-5'>
           <span>Already Have an Account?</span>
           <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
         </div>
         
         </div>
      </div>
   
   </div>
  )
}
