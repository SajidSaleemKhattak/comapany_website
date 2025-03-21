import React, { useState } from "react";
import styling from "./subComponentsStyling/Chat.module.css";
import profilePic from "./chatPerson.jpg";
import { IoMdSend } from "react-icons/io";

const Chat = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const newMessage = { text: message, sender: "user" };
    setMessages([...messages, newMessage]);
    setMessage("");
    setIsChatOpen(true);
    // https://localhost:8000/messages

    try {
      const response = await fetch("https://localhost:8000/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div
      className={`${styling.ChatParent} ${isChatOpen ? styling.expanded : ""}`}
    >
      <div className={styling.picAndName}>
        <img src={profilePic} alt="Profile" className={styling.profilePic} />
        <p className={styling.name}>Touseef From Naxon Solution</p>
      </div>

      {!isChatOpen && (
        <>
          <label>Enter Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          />
          <label>Enter Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          />
          <p className={styling.question}>
            Cheers! Thank You for Choosing Our Services. How can we help you?
          </p>
        </>
      )}

      <div className={styling.messagesContainer}>
        {messages.map((msg, index) => (
          <p
            key={index}
            className={
              msg.sender === "user" ? styling.sentMsg : styling.receivedMsg
            }
          >
            {msg.text}
          </p>
        ))}
      </div>

      <div className={styling.inputContainer}>
        <input
          className={styling.input}
          type="text"
          placeholder="Write Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <IoMdSend className={styling.sendIcon} onClick={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
