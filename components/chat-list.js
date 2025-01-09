import { Plus } from 'lucide-react'

export default function ChatList({ onSelectChat, selectedChat }) {
  return (
    <div className="w-full h-full bg-[#1A1A1A] rounded-xl p-4 flex flex-col">
      <h2 className="text-white text-lg font-medium mb-4">ALL YOUR CHATS</h2>
      
      <div className="bg-[#F8C4C4] rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-black font-medium">Chat Images:</span>
          <span className="text-black font-bold">ON</span>
        </div>
      </div>
      
      <p className="text-zinc-400 text-sm mb-4">
        When a bot sends you images, you will be charged one secondary image
      </p>
      
      <div className="space-y-2 flex-1 overflow-y-auto">
        {['Caressa Jessalin', 'Letty Bride'].map((name, i) => (
          <button
            key={i}
            onClick={() => onSelectChat({ id: i + 1, name, avatar: '/placeholder.svg' })}
            className={`w-full p-3 flex items-center gap-3 rounded-xl transition-colors duration-200 ${
              selectedChat.name === name ? 'bg-zinc-800' : 'hover:bg-zinc-800'
            }`}
          >
            <img
              src="/placeholder.svg"
              alt={name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="text-white text-sm font-medium">{name}</div>
              <div className="text-zinc-400 text-xs">Lorem ipsum dolor sit am...</div>
            </div>
          </button>
        ))}
      </div>
      
      <button className="w-full mt-4 p-3 flex items-center gap-2 text-[#F8C4C4] hover:bg-zinc-800 rounded-xl transition-colors duration-200">
        <Plus size={20} />
        <span className="text-sm font-medium">Create new bot</span>
      </button>
    </div>
  )
}

