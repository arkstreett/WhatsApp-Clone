import React from "react";
import "../styles/SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
  return (
    <div class="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message in the chat room</p>
      </div>
    </div>
  );
}

export default SidebarChat;
