'use client'

import { useState } from 'react'
import Header from '@/components/header'
import ChatList from '@/components/chat-list'
import ChatWindow from '@/components/chat-window'
import Footer from '@/components/footer'

export default function Home() {
  const [selectedChat, setSelectedChat] = useState({
    id: 1,
    name: 'Caressa Jessalin',
    avatar: '/placeholder.svg'
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-[#141414]">
      <Header />
      <main className="flex-1 container mx-auto p-4 flex flex-col md:flex-row gap-4 chat-container">
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block md:w-[380px]`}>
          <ChatList onSelectChat={setSelectedChat} selectedChat={selectedChat} />
        </div>
        <div className={`${!isMobileMenuOpen ? 'block' : 'hidden'} md:block flex-1`}>
          <ChatWindow 
            chat={selectedChat} 
            onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

