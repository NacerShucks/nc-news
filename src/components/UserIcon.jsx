import {useContext} from "react";
import { UserContext } from "../contexts/UserContext"
import { Link } from "react-router-dom";

export default function UserIcon (){
    const {user} = useContext(UserContext)
    
    if(user){
        return (
            <Link to={`/user/${user.user_id}`}>
            Profile
            </Link>
        )
    } else {
        return (
            <Link to={'/login'}>
            Login
            </Link>
        )
    }
    
}