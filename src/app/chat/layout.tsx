import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { Hash, Lock, Users } from 'lucide-react'

const rooms = [
  { id: 'general', name: 'General Discourse', description: 'Open discussion about daily events.', restricted: false },
  { id: 'media-watch', name: 'Media Watchdog', description: 'Reporting and analyzing media bias.', restricted: true },
  { id: 'action-coordination', name: 'Action Hub', description: 'Planning civic responses and protests.', restricted: true },
  { id: 'policy-critique', name: 'Policy Lab', description: 'Deep dives into new legislation.', restricted: false },
]

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow bg-slate-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 hidden md:block">
          <div className="p-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-800 flex items-center gap-2">
              <Users size={18} className="text-red-500" />
              Chatrooms
            </h2>
          </div>
          <nav className="p-2 space-y-1">
            {rooms.map((room) => (
              <Link
                key={room.id}
                href={`/chat/${room.id}`}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Hash size={16} />
                  <span className="text-sm font-medium">{room.name}</span>
                </div>
                {room.restricted && <Lock size={14} className="text-slate-400" />}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow flex flex-col">
          {children}
        </main>
      </div>
    </div>
  )
}
