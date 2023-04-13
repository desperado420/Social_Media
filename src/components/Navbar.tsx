import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"

export const Navbar = () => {
    const [user] = useAuthState(auth)
    const signOff = async () => {
        await signOut(auth)
    }

    return <div className="navbar">
        <div className="links">
            <Link to="/">Home</Link>
            {!user && <Link to="/login">Login</Link>}
            {user && <Link to="./create">Create Post</Link>}
        </div>


        <div className="user">
            {user && (
                <>
                    <p> {user?.displayName} </p>
                    <img src={auth.currentUser?.photoURL || ""} width="30" height="30" />
                    <button onClick={signOff} >LogOut</button>
                </>
            )}

        </div>
    </div>
}