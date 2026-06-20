import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Poll from '@/components/Poll'
import { Plus } from 'lucide-react'

const activePolls = [
  {
    id: '1',
    question: 'Should we organize a collective boycott of media outlets that failed to report on the recent legislative changes?',
    totalVotes: 1240,
    options: [
      { id: 'a', text: 'Yes, full boycott', votes: 850 },
      { id: 'b', text: 'No, try engagement first', votes: 240 },
      { id: 'c', text: 'Neutral / Undecided', votes: 150 },
    ]
  },
  {
    id: '2',
    question: 'What should be our primary focus for the next quarter?',
    totalVotes: 890,
    options: [
      { id: 'a', text: 'Anti-Corruption Investigations', votes: 450 },
      { id: 'b', text: 'Legal Defense Fund for Whistleblowers', votes: 320 },
      { id: 'c', text: 'Public Awareness Campaigns', votes: 120 },
    ]
  }
]

export default function PollsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Action Polls</h1>
              <p className="text-slate-600 mt-2">Voice your opinion on project directions and collective actions.</p>
            </div>
            <button className="bg-slate-900 text-white p-3 rounded-full hover:bg-slate-800 transition-colors shadow-lg" title="Create Poll">
              <Plus size={24} />
            </button>
          </div>

          <div className="space-y-8">
            {activePolls.map(poll => (
              <Poll key={poll.id} {...poll} />
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-blue-800">
            <h4 className="font-bold mb-2">Why Polls Matter?</h4>
            <p className="text-sm">
              In a world where individual voices are often ignored, collective consensus is our most powerful tool. 
              These polls help define our strategy and demonstrate the weight of public opinion.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
