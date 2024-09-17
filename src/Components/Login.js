import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header />
        <div className='absolute'> 
         <img className=""src ="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"  alt="backgroundimage" />    
        </div>
        <form className="text-white absolute w-3/12  p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className='font-bold  text-3xl py-4'>Sign In</h1>
          <input className="p-2 my-4 w-full bg-gray-700 rounded-sm"type = "text" placeholder ="Email Address"></input>
          <input className="p-2 my-4 w-full bg-gray-700 rounded-sm"type = "password" placeholder ="Password"></input>
          <button className='w-full p-2 my-6  bg-red-700 rounded-lg'>Sign In</button>
        </form>
    </div>
  )
}

export default Login

