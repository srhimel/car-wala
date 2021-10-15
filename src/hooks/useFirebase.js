import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { firebaseInit } from "../firebase/firebase.init";

firebaseInit()


const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isloading, setIsloading] = useState(true);
    const googleSignIn = () => {
        setIsloading(true);
        return signInWithPopup(auth, googleProvider)

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsloading(false);
        });

        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsloading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setIsloading(false);
            });
    }

    return {
        user,
        error,
        googleSignIn,
        logOut,
        isloading
    };
};

export default useFirebase;