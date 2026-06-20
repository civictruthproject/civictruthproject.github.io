'use client'

import { useState } from 'react'
import { CheckCircle2, Users } from 'lucide-react'

interface PollProps {
  id: string
  question: string
  options: { id: string, text: string, votes: number }[]
  totalVotes: number
}

export default function Poll({ question, options, totalVotes }: PollProps) {
  const [voted, setVoted] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleVote = (optionId: string) => {
    if (voted) return
    setSelectedOption(optionId)
    setVoted(true)
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-6">
      <div className="flex items-center gap-2 text-red-600 mb-4">
        <CheckCircle2 size={20} />
        <span className="text-sm font-bold uppercase tracking-wider">Active Poll</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-6">{question}</h3>
      
      <div className="space-y-3">
        {options.map((option) => {
          const percentage = totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0
          const isSelected = selectedOption === option.id

          return (
            <button
              key={option.id}
              onClick={() => handleVote(option.id)}
              disabled={voted}
              className={`w-full relative group ${voted ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div className={`w-full p-4 rounded-xl border-2 transition-all flex justify-between items-center relative z-10 ${
                isSelected 
                  ? 'border-red-500 bg-red-50' 
                  : voted 
                    ? 'border-slate-100 bg-slate-50' 
                    : 'border-slate-200 hover:border-red-200 hover:bg-slate-50'
              }`}>
                <span className={`font-semibold ${isSelected ? 'text-red-700' : 'text-slate-700'}`}>
                  {option.text}
                </span>
                {voted && (
                  <span className="text-slate-500 font-bold">{percentage}%</span>
                )}
              </div>
              {voted && (
                <div 
                  className={`absolute top-0 left-0 h-full rounded-xl transition-all duration-1000 ease-out ${
                    isSelected ? 'bg-red-200/50' : 'bg-slate-200/50'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              )}
            </button>
          )
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-slate-500 text-sm">
        <div className="flex items-center gap-1">
          <Users size={16} />
          <span>{voted ? totalVotes + 1 : totalVotes} votes cast</span>
        </div>
        {voted && (
          <span className="text-green-600 font-medium">Vote recorded</span>
        )}
      </div>
    </div>
  )
}
