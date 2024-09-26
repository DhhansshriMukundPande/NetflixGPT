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

const Header = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  
  const user = useSelector(store =>store.user );

 

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


  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img 
      className="w-44 " 
      src= {LOGO_URL}
      alt="logo"
       />
          {user &&(
            <div className='p-2 flex gap-1'> 
             <img src ={user.photoURL}
              className="w-12 h-12 "  alt="usericon" />
             <button  onClick={handleSignOut}>Sign Out</button>
          </div>)}
      </div>

   
  )
}

export default Header;