import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ChatWithPDF = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = { id: Date.now(), text: message, sender: 'You' };
    setMessages((prev) => [...prev, newMessage]);
    setMessage('');

    try {
      const response = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      
      if (!response.ok) throw new Error('Failed to get response');
      
      const data = await response.json();
      setMessages((prev) => [...prev, { id: Date.now(), text: data.response, sender: 'Assistant' }]);
    } catch (error) {
      setMessages((prev) => [...prev, { id: Date.now(), text: 'Error: Failed to get response', sender: 'System' }]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#0b1021] text-[#8892b0] font-mono p-4">
      <h1 className="text-4xl font-bold text-purple-400 mb-8">CHAT WITH PDF</h1>
      
      <div className="w-full max-w-4xl bg-[#101827e6] border-2 border-[#2d3f87] shadow-lg rounded-lg flex flex-col h-[80vh]">
        <div className="flex-1 overflow-y-auto p-4 space-y-4" id="messagesContainer">
          {messages.map((msg) => (
            <div key={msg.id} className={`max-w-[80%] p-3 rounded-lg ${
              msg.sender === 'You' ? 'bg-[#2d3f87cc] ml-auto border border-[#58128c]' :
              msg.sender === 'Assistant' ? 'bg-[#58128c4d] border border-[#2d3f87]' :
              'bg-gray-700 border border-gray-500'
            }`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage} className="p-4 bg-[#101827f2] border-t-2 border-[#2d3f87] flex gap-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask a question about the PDF..."
            className="flex-1 bg-[#0d121e] border border-[#2d3f87] text-[#a8b2d1] p-3 rounded-lg focus:outline-none focus:border-[#58128c] focus:shadow-lg"
          />
          <button type="submit" className="bg-[#2d3f87cc] border border-[#58128c] px-6 py-3 rounded-lg text-blue-300 hover:text-white hover:bg-[#58128ccc] transition-all">
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWithPDF;
