import axios from "config/axios";

export const endPoint = '/auth/google';

export const onLogin = async(data) => {
          const response = await axios.post(endPoint, data)
          return response.data.data
}
