import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'System', text: 'Welcome to the secure chat. All messages are end-to-end encrypted.', time: '10:00 AM' },
    { id: 2, sender: 'John', text: 'Hi team, I detected some unusual network activity.', time: '10:05 AM' },
    { id: 3, sender: 'Sarah', text: 'Can you provide more details about the activity?', time: '10:07 AM' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: 'You',
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setMessage('');
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-white shadow p-4">
        <h1 className="text-xl font-semibold">Security Team Chat</h1>
        <p className="text-sm text-gray-500">3 team members online</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'You' ? 'items-end' : 'items-start'}`}
          >
            <div className={`max-w-[70%] rounded-lg p-3 ${
              msg.sender === 'System' 
                ? 'bg-gray-100' 
                : msg.sender === 'You'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
            }`}>
              {msg.sender !== 'You' && (
                <p className="text-sm font-semibold mb-1">{msg.sender}</p>
              )}
              <p>{msg.text}</p>
              <p className="text-xs mt-1 opacity-70">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;