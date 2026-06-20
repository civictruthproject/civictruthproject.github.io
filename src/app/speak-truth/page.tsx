import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Eye, ExternalLink, MessageCircle } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: 'The Silent Subsidy: How Media Ignored the Billion-Dollar Loophole',
    summary: 'A deep dive into the recent fiscal policy changes that major networks failed to cover, and who really benefits from the silence.',
    date: 'June 12, 2024',
    author: 'TruthSeeker_01',
    category: 'Media Bias',
    image: '/api/placeholder/800/400'
  },
  {
    id: 2,
    title: 'Weaponizing Local News: The Coordinated Narrative on Public Safety',
    summary: 'Analyzing the identical scripts used by local stations to push a specific government-friendly agenda regarding surveillance.',
    date: 'June 10, 2024',
    author: 'CitizenJournalist',
    category: 'Governance',
    image: '/api/placeholder/800/400'
  }
]

export default function SpeakTruthPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-slate-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Speak Truth</h1>
            <p className="text-xl text-slate-400">
              Counters to biased media narratives and investigations into government actions against citizens.
            </p>
          </div>
        </section>

        {/* Article Feed */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {articles.map(article => (
              <article key={article.id} className="group cursor-pointer">
                <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold italic">
                    Evidence Image / Graph
                  </div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {article.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>By {article.author}</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {article.summary}
                </p>
                <div className="flex items-center gap-6 text-slate-500">
                  <div className="flex items-center gap-2 hover:text-slate-900">
                    <Eye size={18} />
                    <span>2.4k views</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-slate-900">
                    <MessageCircle size={18} />
                    <span>48 comments</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-slate-900 ml-auto">
                    <span>Read Full Report</span>
                    <ExternalLink size={18} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Submission CTA */}
        <section className="bg-slate-50 py-16 border-t border-slate-100">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Have evidence of misconduct?</h2>
            <p className="text-slate-600 mb-8">
              We provide a secure platform for whistleblowers and citizen journalists to share truth without fear of censorship.
            </p>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-all">
              Submit a Report
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
