import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,

      });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      const data = await res.json();
      if(data.success == false) {
        setError(data.message);
        return;
      }
      setLoading(false); 
        } catch (error) {
          setLoading(false);
          setError(error.message);
          navigate('/sign-in');
        }
        
  
    };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='username'
        className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type="email" placeholder='email'
        className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='password'
        className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
       <button disabled={loading}className='bg-black text-white p-3 rounded-lg uppercase hover:bg-yellow-500 hover:opacity-90 disabled:opacity-80'>
        {loading ? 'Loading...': 'Sign up'}
       </button>
      </form>
       <div className="flex gap-2 mt-5">
        <p>Already Have an account?</p>
        <Link to={'/Signin'}>
          <span className='text-yellow-500'>Sign in</span>
        </Link>
       </div>
       {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
