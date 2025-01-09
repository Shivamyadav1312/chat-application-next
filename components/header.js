import Link from 'next/link'
import { Home, PenSquare, Edit } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-[#141414]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-[#F8C4C4] text-2xl font-bold">
            Logo
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/explore" 
              className="text-zinc-300 hover:text-white flex items-center gap-2 transition-colors duration-200"
            >
              <Home size={18} />
              Explore
            </Link>
            <Link 
              href="/create" 
              className="text-zinc-300 hover:text-white flex items-center gap-2 transition-colors duration-200"
            >
              <PenSquare size={18} />
              Create
            </Link>
            <Link 
              href="/edit" 
              className="text-zinc-300 hover:text-white flex items-center gap-2 transition-colors duration-200"
            >
              <Edit size={18} />
              Edit
            </Link>
          </nav>
        </div>
        <button className="px-6 py-2 bg-[#F8C4C4] hover:bg-[#f5b1b1] text-black rounded-full transition-colors duration-200 text-sm font-medium">
          Login
        </button>
      </div>
    </header>
  )
}

