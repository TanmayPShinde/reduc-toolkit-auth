import axios from "axios";

const API_URL = "http://localhost:8000/";

// register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//login user
const login = async (userData) => {
  const response = await axios.get(API_URL, {
    params: { name: userData["name"] },
  });

  return response.data;
};

//logout user
const logout = async () => localStorage.removeItem("user");

const authService = {
  register,
  logout,
  login,
};

export default authService;
