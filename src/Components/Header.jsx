import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-black shadow-md'>
      <div className='flex justify-between items-left max-w-6l mx-auto p-3'>
        <Link to ='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-yellow-500'>House</span>
          <span className='text-yellow-600'>Of</span>
          <span className='text-yellow-800'>Quayson</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex items-text-align-right' style={{ wordSpacing: '10px' }}>
        <Link to='/'>
          <li className='sm:inline text-yellow-700 hover:underline' style={{ marginRight: '10px' }}>Home</li>
          </Link>
          <Link to='/AboutMe'>
          <li className='hidden sm:inline text-yellow-700 hover:underline' style={{ marginRight: '10px' }}>About</li>
          </Link>
          <Link to='/ContactMe'>
          <li className='hidden sm:inline text-yellow-700 hover:underline' style={{ marginRight: '10px' }}>Contact</li>
          </Link>
          <Link to='/IndustryKnowHow'>
          <li className='hidden sm:inline text-yellow-700 hover:underline' style={{ marginRight: '10px' }}>Industry</li>
          </Link>
          <Link to='/PastProjects'>
          <li className='sm:inline text-yellow-700 hover:underline' style={{ marginRight: '10px' }}>Portfolio</li>
          </Link>
          <Link to='/signin'>
          <li className='sm:inline text-yellow-700 hover:underline' style={{ marginRight: '10px' }}>Signin</li>
          </Link>
          <Link to='/signup'>
          <li className='hidden sm:inline text-yellow-700 hover:underline' style={{ marginRight: '10px' }}>Signup</li>
          </Link>
          <Link to='/thoughts'>
          <li className='hidden sm:inline text-yellow-700 hover:underline' style={{ marginRight: '10px' }}>Thoughts</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
