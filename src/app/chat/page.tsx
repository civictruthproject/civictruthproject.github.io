import { MessageSquare } from 'lucide-react'

export default function ChatIndex() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-8 text-center">
      <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-200 max-w-lg">
        <MessageSquare size={64} className="text-slate-200 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Select a Room to Start</h2>
        <p className="text-slate-500">
          Join one of our themed chatrooms to discuss, coordinate, and act. 
          Some rooms require special permissions to ensure secure coordination.
        </p>
      </div>
    </div>
  )
}
