import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export default function init() {
//   axios.defaults.baseURL = API_URL;
  axios.defaults.withCredentials = false;

  // Retrieve tokens from cookies
  const accessToken = cookies.get("oma-token");
  // Set default Authorization header if access token exists
  if (accessToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }

  // Add response interceptor for handling token expiration
  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error?.response?.status === 401) {
        
          cookies.remove("oma_token");
          window.location.href = "/auth/login";
      }

      return Promise.reject(error);
    }
  );
}
