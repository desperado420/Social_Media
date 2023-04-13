import {auth, provider} from "../config/firebase"
import { signInWithPopup } from "firebase/auth"
import {useNavigate} from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate()

    const signInWithGoogle = async() => {
        // In the below line user with sign in with google account with the help of auth and provider.
        // And this user information will be stored inside result variable 
        const result = await signInWithPopup(auth, provider)
        console.log(result)
        // This will automatically take the user to the home page upon login successfully
        navigate('/')
    }

    return (
        <div>
            <p>Sign in with Google to Continue</p>
            <button onClick={signInWithGoogle}  >Sign in with Google</button>
        
        </div>
    )
}
