'use client'

import { use, useState } from 'react'
import { Send, Lock } from 'lucide-react'

const roomInfo: Record<string, { name: string, restricted: boolean }> = {
  'general': { name: 'General Discourse', restricted: false },
  'media-watch': { name: 'Media Watchdog', restricted: true },
  'action-coordination': { name: 'Action Hub', restricted: true },
  'policy-critique': { name: 'Policy Lab', restricted: false },
}

export default function ChatRoomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const room = roomInfo[id] || { name: 'Unknown Room', restricted: false }
  const [isAccessDenied, setIsAccessDenied] = useState(room.restricted)
  const [messages, setMessages] = useState<{ id: number, user: string, text: string }[]>([
    { id: 1, user: 'Admin', text: `Welcome to the ${room.name} room.` }
  ])
  const [input, setInput] = useState('')

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages([...messages, { id: Date.now(), user: 'You', text: input }])
    setInput('')
  }

  if (isAccessDenied) {
    return (
      <div className="flex-grow flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-md text-center">
          <div className="bg-red-50 text-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock size={32} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Restricted Access</h2>
          <p className="text-slate-600 mb-6">
            The <strong>{room.name}</strong> room is restricted to verified members to ensure secure coordination.
          </p>
          <button 
            onClick={() => setIsAccessDenied(false)}
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Request Access
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-grow flex flex-col h-full bg-white">
      {/* Room Header */}
      <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
        <div>
          <h2 className="font-bold text-slate-900 text-lg">{room.name}</h2>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span> 12 members online
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col ${msg.user === 'You' ? 'items-end' : 'items-start'}`}>
            <span className="text-xs font-semibold text-slate-500 mb-1 px-1">{msg.user}</span>
            <div className={`max-w-[70%] p-3 rounded-2xl ${
              msg.user === 'You' 
                ? 'bg-red-600 text-white rounded-tr-none' 
                : 'bg-slate-100 text-slate-800 rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-4 border-t border-slate-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${id}...`}
            className="flex-grow border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  )
}
