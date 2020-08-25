import React, { useState, useEffect } from "react";
//import css file
import "./SidebarChat.css";
// import icons
import { Avatar } from "@material-ui/core";
// import firebase
import db from "./firebase";
// adding routin
import { Link } from "react-router-dom";
function SidebarChat({ addNewChat, name, id }) {
  const [seed, setSeed] = useState("a");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = () => {
    const roomName = prompt("please add the room name ");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info ">
          <h2> {name}</h2>
          <p> last message ...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2> Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
