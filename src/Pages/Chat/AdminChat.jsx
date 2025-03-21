import { useState, useEffect } from "react";
import axios from "axios";

const AdminChat = () => {
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data } = await axios.get("/api/messages"); // Replace with your API endpoint
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleReply = async () => {
    if (!reply.trim() || !selectedClient) return;
    try {
      await axios.post("/api/reply", {
        clientId: selectedClient,
        message: reply,
      });
      setReply("");
      fetchMessages(); // Refresh messages after sending a reply
    } catch (error) {
      console.error("Error sending reply:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Admin Chat</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Client list */}
        <div className="col-span-1 border-r p-2">
          <h2 className="font-semibold mb-2">Clients</h2>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 cursor-pointer rounded ${
                selectedClient === msg.clientId
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedClient(msg.clientId)}
            >
              {msg.clientName}
            </div>
          ))}
        </div>

        {/* Chat Box */}
        <div className="col-span-2 p-2">
          <h2 className="font-semibold mb-2">Chat</h2>
          <div className="h-64 overflow-y-auto border p-2 bg-gray-100">
            {messages
              .filter((msg) => msg.clientId === selectedClient)
              .map((msg, index) => (
                <div key={index} className="mb-2">
                  <strong>{msg.clientName}:</strong> {msg.message}
                </div>
              ))}
          </div>
          {/* Reply Input */}
          {selectedClient && (
            <div className="mt-4">
              <textarea
                className="w-full border p-2 rounded"
                rows="3"
                placeholder="Type your reply..."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              ></textarea>
              <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleReply}
              >
                Send Reply
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminChat;
