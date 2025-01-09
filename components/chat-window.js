import { ArrowLeft, Trash2, Send, Menu } from 'lucide-react'

export default function ChatWindow({ chat, onMenuToggle }) {
  const messages = [
    { id: 1, text: "Hello! 👋", sender: "bot" },
    { id: 2, text: "Your order according to application yes?", sender: "bot" },
    { id: 3, text: "Yes, my order according to application. Thank you", sender: "user" },
    { id: 4, text: "Are you Therese", sender: "user" },
    { id: 5, text: "How can I help You?", sender: "bot" },
  ]

  return (
    <div className="flex-1 bg-[#1A1A1A] rounded-xl flex flex-col h-full">
      <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={onMenuToggle}
            className="md:hidden text-zinc-400 hover:text-white transition-colors duration-200"
          >
            <Menu size={20} />
          </button>
          <img
            src={chat.avatar}
            alt={chat.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-white font-medium">{chat.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-zinc-400 hover:text-white transition-colors duration-200">
            <ArrowLeft size={20} />
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors duration-200">
            <Trash2 size={20} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto message-area space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-xl ${
                message.sender === 'user'
                  ? 'bg-[#F8C4C4] text-black'
                  : 'bg-zinc-800 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Message"
            className="flex-1 bg-zinc-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F8C4C4] text-sm"
          />
          <button className="p-3 text-[#F8C4C4] hover:bg-zinc-800 rounded-xl transition-colors duration-200">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

