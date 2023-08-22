import React, { useState, useEffect } from "react"; // Make sure to import React components correctly
import axios from "axios";
import { useNavigationContext } from "./NavigationContext";
import "./TravelCard.css";
import data from "../data";
import locationLogo from "../assets/location.png";

export default function TravelCard(userId) {
  const [userPosts, setUserPosts] = useState([]);
  const { cookie, navigate } = useNavigationContext();

  function formatDate(inputDate) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(inputDate);
    const day = date.getUTCDate();
    const monthIndex = date.getUTCMonth();
    const year = date.getUTCFullYear();

    const formattedDate = `${day} ${months[monthIndex]} ${year}`;

    return formattedDate;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5050/post", {
          params: { userId },
          withCredentials: true,
        });
        const posts = response.data.posts;
        setUserPosts(posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  if (!userPosts) {
    console.log(data);
    return (
      <div className="no--post">
        <h1>No post available</h1>
        <p>
          You haven't make any post yet. make one now by clicking the button
          below!
        </p>
        <button
          type="button"
          className="post-button-0 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => navigate("/post", { state: { userId: userId } })}
        >
          Make Post!
        </button>
        <section className="card--body">
          <div key={data.key} className="card">
            <img className="card--image" src={data.image} alt="hi there" />
            <div className="card--details">
              <div className="card--location">
                <img src={locationLogo} alt="" />
                <h4>{data.location}</h4>
              </div>
              <h1 className="card--title">{data.title}</h1>
              <p className="card--date">28 May</p>
              <p className="card--paragraph">{data.description}</p>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    const cards = userPosts.map(
      (post) => (
        (post.date = formatDate(post.date)),
        console.log(post.date),
        (<TravelCard key={post._id} item={post} />) // Use post._id instead of post.id
      )
    );
    return (
      <div className="post-exist">
        <button
          type="button"
          className="post-button-0 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => navigate("/post", { state: { userId: userId } })}
        >
          Make Post!
        </button>
        {cards.map((card) => (
          <div key={card.key} className="card">
            <img
              className="card--image"
              src={card.props.item.imgUrl}
              alt="hi there"
            />
            <div className="card--details">
              <div className="card--location">
                <img src={locationLogo} alt="" />
                <h4>{card.props.item.location}</h4>
              </div>
              <h1 className="card--title">{card.props.item.title}</h1>
              <p className="card--date">{card.props.item.date}</p>
              <p className="card--paragraph">{card.props.item.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
