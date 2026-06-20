import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-slate-900 text-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Demanding Accountability. <br />
            <span className="text-red-500">Exposing the Truth.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            When the media favors the powerful and the government acts against its citizens, we speak up. 
            The Civic Truth Project is a platform for collective action and unfiltered transparency.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/chat" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all">
              Join the Chatrooms <ArrowRight size={20} />
            </Link>
            <Link href="/speak-truth" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Read Our Exposés
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
