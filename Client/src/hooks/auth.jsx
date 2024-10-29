import {jwtDecode} from 'jwt-decode';

export const useAuth = () => {
  try {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [key, value] = cookie.split('=');
      acc[key] = value;
      return acc;
    }, {});

    const token = cookies["token"];
    if (!token) {
      throw new Error("No token found in cookies");
    }

    const decodedToken = jwtDecode(token);
    
    // Assuming your JWT payload contains a 'user' object
    const user = decodedToken.user || decodedToken; // Adjust based on actual JWT structure

    return user;
  } catch (error) {
    console.error("Authentication error:", error.message);
    return null; // Handle error as needed
  }
};
