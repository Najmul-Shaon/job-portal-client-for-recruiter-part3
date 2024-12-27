import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://job-portal-server-for-recruiter-part3-red.vercel.app",
  withCredentials: true,
});

const useAxioxSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error in interceptor", error);

        if (error.status === 401 || error.status === 403) {
          console.log("logged out");
          signOutUser()
            .then(() => {
              console.log("logged out user");
              navigate("/signIn");
            })
            .catch((err) => {
              console.log(err);
            });
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosInstance;
};

export default useAxioxSecure;
