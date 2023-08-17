import react from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (cookies.token) {
        const { data } = await axios.post(
          "http://localhost:5050",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        console.log(data);
        setUsername(user);
        return status
          ? toast(`hello ${user}`, {
              position: "bottom-right",
            })
          : (removeCookie("token"), navigate("/"));
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/");
  };

  if (cookies.token) {
    return (
      <div className="home">
        <h1 className="greeting--title"> Hello {username}! </h1>
      </div>
    );
  }
}
