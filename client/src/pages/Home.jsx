import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../components/Navbar";
import { NavigationProvider } from "../components/NavigationContext";
import TravelCard from "../components/TravelCard";
import data from "../data";
import FooterComponent from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      console.log(cookies.token);
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:5050",
        {},
        { withCredentials: true }
      );
      const { status, firstName, userId } = data;
      setUsername(firstName);
      setUserId(userId);
      return status
        ? toast(`Hello ${username}}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };
  return (
    <NavigationProvider
      navigateFunction={navigate}
      cookieFunction={removeCookie}
      cookie={cookies}
    >
      <div>
        {/* ... other components */}
        <Navbar data />
        <TravelCard userId={userId} />
        <FooterComponent />
        {/* ... other components */}
      </div>
    </NavigationProvider>
  );
};

export default Home;
