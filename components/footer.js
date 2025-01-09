import { Send, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#141414]">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[#F8C4C4] text-2xl font-bold">
          Logo
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <span className="text-zinc-400 text-sm">Contact@00000000.tech</span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">
              <Send size={20} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

