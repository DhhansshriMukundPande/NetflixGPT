import React from 'react'
import { auth } from '../Utils/Firebase';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {addUser, removeUser} from "../Utils/userSlice"
import { useEffect } from 'react'
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { LOGO_URL } from '../Utils/Constants';
import { toggleGptSearchView } from '../Utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../Utils/Constants';
import {changeLanguage} from "../Utils/configSlice"
const Header = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  
  const user = useSelector(store =>store.user );
  const showGptSearch =useSelector(store =>store.gpt.showGptSearch)

 

  useEffect(()=>
    {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const {uid ,email,displayName,photoURL}= user
        dispatch(
          addUser
          ({uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL
          })
          );
          navigate("/browse");
     
      } else {
        // User is signed out
       dispatch(removeUser());
       navigate("/");
      }
    });

    return() => unsubscribe();
  },[])



const handleSignOut = () =>  {
  signOut(auth)
  .then(() => {
  // Sign-out successful.
 
})
.catch((error) => {
  navigate("/error")
});

  }

  const handleGptSearchClick =() =>{
       dispatch(toggleGptSearchView());
  }

   const handleLanguageChange =(e)=>{
       dispatch(changeLanguage(e.target.value))
   }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img 
      className="w-40 mx-auto  md:mx-0 " 
      src= {LOGO_URL}
      alt="logo"
       />
          {user &&
          (
            <div className='p-2 flex justify justify-between'> 
            {showGptSearch && (<select className=' mb-2 md:p-2m-2 bg-gray-900 text-white rounded-lg 'onClick={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) =>(
              <option key={lang.identifier} value ={lang.identifier}>{lang.name}
               </option>
              ))}
             
            </select>)}
            <button 
            className='  md:py-2 px-4 m-2 bg-red-700 rounded-lg text-white'
            onClick={handleGptSearchClick}
            >{showGptSearch ? "Homepage" :"GPT Search"}
            </button>
             <img src ={user.photoURL}
              className=" hidden md:block w-12 h-12 "  alt="usericon" />
             <button className='text-base text-white md:text-white' 
             onClick={handleSignOut}>Sign Out</button>
          </div>
        )}
      </div>
    )
}

export default Header;