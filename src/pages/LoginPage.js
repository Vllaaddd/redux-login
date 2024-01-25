import Form from "components/Form";
import UserMenu from "components/UserMenu";
import { useSelector } from "react-redux";

export default function LoginPage(){
    const isLoggedIn = useSelector((state => state.authUser.isLoggedIn))
    return(
        <>
            <div>
                {isLoggedIn ? (<UserMenu />) : (<Form />)}
            </div>
        </>
    )
}