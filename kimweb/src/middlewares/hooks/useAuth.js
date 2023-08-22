import { useContext } from "react";
import AuthContext from "middlewares/context/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext)
}
 
export default useAuth;