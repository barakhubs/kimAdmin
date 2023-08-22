import axios from "config/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const verify = JSON.parse(localStorage.verify)
    // very considerate work for sure 
    const REFRESH_URL = '/auth/sessions/'+verify?.id
    const refresh = async () => {
        
        const response = await axios.patch(REFRESH_URL, JSON.stringify({ refresh_token: verify?.refresh }), { headers:{ 'Authorization': verify?.access} })
        setAuth(prev => {
            // console.log(JSON.stringify(prev))
            const verify = { refresh : response.data.data.refresh_token,  id: response.data.data.session_id, access: response.data.data.access_token  }
            localStorage['verify'] = JSON.stringify(verify);
            // localStorage['verify'] = { "refresh" : response.data.data.refresh_token, "id": response.data.data.id };
            return {...prev, accesstoken: response.data.data.access_token, refreshtoken: response.data.data.refresh_token }
        })
        return response.data.data.access_token;
    }
    
    return refresh;

}
 
export default useRefreshToken;