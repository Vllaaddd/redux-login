import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/slice"

export default function UserMenu(){

    const user = useSelector((state => state.authUser.user))
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logout())
    }

    return(
        <>
            <h2>Welocme {user}</h2>
            <button onClick={handleClick}>Log out</button>
        </>
    )
}