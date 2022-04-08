import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import {  useEffect, useState } from "react"
import app from "../firebase.inti";
import { getAuth } from "firebase/auth";

  
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
    const [user, setUser ] = useState({});
    

   

    const signInWithGoogle=()=>{
       signInWithPopup(auth,googleProvider)
       .then(result => {
        const user = result.user;
        setUser(user);
        // console.log(user);
       })
    }
    const handleSignOut = () =>{
        signOut(auth)
        .than(() =>{})
    }
     
    useEffect(() =>{
        onAuthStateChanged(auth,user=>{
                setUser(user);
           
        })
    },[])


    return {
        user,
        handleSignOut,
        signInWithGoogle
    }

}



export default useFirebase;