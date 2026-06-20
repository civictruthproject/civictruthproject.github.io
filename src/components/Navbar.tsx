import Link from 'next/link'
import { Shield } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Shield className="text-red-500" />
              <span>Civic Truth Project</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/speak-truth" className="hover:text-red-400 px-3 py-2 rounded-md transition-colors">Speak Truth</Link>
              <Link href="/chat" className="hover:text-red-400 px-3 py-2 rounded-md transition-colors">Chatrooms</Link>
              <Link href="/polls" className="hover:text-red-400 px-3 py-2 rounded-md transition-colors">Action Polls</Link>
              <Link href="/login" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
