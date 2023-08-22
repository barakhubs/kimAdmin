import { Outlet } from "react-router-dom";
import {useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "middlewares/hooks/useAuth";

const PersitLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect( () => {
        const verifyRefreshToken = async () => {
            try {
                    await refresh();
            } catch (err) {
                // console.log(err)
            }
            finally {
                setIsLoading(false);
            }
        }
        !auth?.accesstoken ? verifyRefreshToken() : setIsLoading(false)
    }, [auth, isLoading, refresh])
    return (
        <>
            {isLoading ? '' : <Outlet /> }
        </>
    )
}
 
export default PersitLogin;
