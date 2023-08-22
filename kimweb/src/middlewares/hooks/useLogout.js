import axios from "config/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { auth, setAuth } = useAuth();
    
    const logout = async () => {
        await setAuth({});
        try {
          await axios.delete('/sessions/'+auth?.sessionid, {
                headers: {
                    'Authorization': auth?.accesstoken
                }
            });
        } catch (err) {
            console.error(err);

        }
    }

    return logout;
}

export default useLogout;