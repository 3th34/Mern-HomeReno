import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username'
        className='border p-3 rounded-lg' id='username'/>
        <input type="email" placeholder='email'
        className='border p-3 rounded-lg' id='email'/>
        <input type="password" placeholder='password'
        className='border p-3 rounded-lg' id='password'/>
       <button className='bg-black text-white p-3 rounded-lg uppercase hover:bg-yellow-500 hover:opacity-90 disabled:opacity-80'>Sign up</button>
      </form>
       <div className="flex gap-2 mt-5">
        <p>Already Have an account?</p>
        <Link to={'/Sign-in'}>
          <span className='text-yellow-500'>Sign in</span>
        </Link>
       </div>
    </div>
  )
}
