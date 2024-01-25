import { useDispatch } from "react-redux"
import { login } from "../redux/slice";
import { useNavigate } from "react-router-dom";

export default function Form(){

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(login(ev.currentTarget.elements.username.value))
        navigate('/dashboard', {replace: true})
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" />
            <button type="submit">Log in</button>
        </form>
    )
}