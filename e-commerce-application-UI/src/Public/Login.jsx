import React from 'react';

function Login() {
  return (
    <div>
      <form className='mt-32 mx-auto border-2 border-gray-700 w-96 h-60 flex flex-col justify-evenly items-center rounded-md scale-110 bg-gray-900 text-white'>
        <div className='text-yellow-400 font-bold text-lg text-center w-full bg-green-600 -mt-4 rounded-t'>Welcome Back!</div>
        
        <input className='border-2 border-gray-600 px-5 py-2 bg-gray-800 text-white rounded-md mb-3' type="text" placeholder='Enter email'/>
        <input className='border-2 border-gray-600 px-5 py-2 bg-gray-800 text-white rounded-md mb-3' type="password" placeholder='Enter password'/>
        <input className="border-2 border-yellow-400 px-5 py-2 cursor-pointer rounded-md font-medium transition ease-in-out duration-300 hover:bg-yellow-200 hover:text-sky-700 hover:border-yellow-200 hover:-translate-y-1 bg-gray-800 text-white" type="submit" value='Log In'/>
        <a className='text-base font-normal mt-2 text-gray-400' href='#'>Forgot password?</a>
      </form>
    </div>
  );
}

export default Login;
