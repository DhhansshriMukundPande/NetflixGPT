import React from 'react'
import Header from './Header'
import { useState ,useRef} from 'react';
import { checkValidate } from '../Utils/Validate';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../Utils/Firebase"

import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { URL } from '../Utils/Constants';



const Login = () => {
  const [isSignInForm,setIsSignInForm]= useState(true);
  const[errorMessage,setErrorMessage]=useState(null);

  const dispatch =useDispatch()
  
  
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  
  const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  }

  const handleButtonClick =() =>{
    //validate form data
      const nameValue = isSignInForm ? null : name.current?.value; 
    // console.log(nameValue)
   const message= checkValidate(email.current.value,password.current.value,nameValue,isSignInForm);
   setErrorMessage(message);
   if(message) return;

   if(!isSignInForm){
     //signup 

     createUserWithEmailAndPassword(auth,
      email.current.value,
      password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   updateProfile(user, {
  displayName: name.current.value, 
  photoURL: URL
})
.then(() => {
  const {uid ,email,displayName,photoURL}= auth.currentUser
        dispatch(
           addUser(
          {uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL})
          );
     })
.catch((error) => {
  setErrorMessage(error.message)
});

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+errorMessage)
  });

}
else{
      //signin
      signInWithEmailAndPassword(auth,
        email.current.value,
        password.current.value
      )
       .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setErrorMessage(errorCode + errorMessage)
  });



}
   
  }

  return (
    <div>
      <Header />
        <div className='absolute'> 
         <img className=""src ="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"  alt="backgroundimage" />    
        </div>
        <form onSubmit={(e)=>e.preventDefault()}
        className="text-white absolute w-3/12  p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold  text-3xl py-4 ">{isSignInForm ?"Sign In":"Sign Up"}</h1>
          
          {!isSignInForm  &&(
          <input 
          ref={name}
          className="p-2 my-4 w-full bg-gray-700 rounded-sm"
          type = "text" 
          placeholder ="Full Name">

          </input>)}

          <input 
          ref={email}
          className="p-2 my-4 w-full bg-gray-700 rounded-sm"
          type = "text" 
          placeholder ="Email Address">
          </input>
          
          <input 
          ref={password}
          className="p-2 my-4 w-full bg-gray-700 rounded-sm"
          type = "password" 
          placeholder ="Password">
          </input>
          <p className='text-red-600 font-bold text-lg'>{errorMessage}</p>
          <button  
          className='w-full p-2 my-6  bg-red-700 rounded-lg' 
           onClick={handleButtonClick}>{isSignInForm ?"Sign In":"Sign Up"}
          </button>
          <p 
          className='py-4 cursor-pointer'
           onClick={toggleSignInForm}>{isSignInForm ?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}
           </p>
       
        </form>
    </div>
  )
}

export default Login

