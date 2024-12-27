import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxioxSecure = () => {
  return axiosInstance;
};

export default useAxioxSecure;
