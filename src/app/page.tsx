import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <section className="bg-slate-50 py-20 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 italic">
              &quot;Truth does not fear investigation.&quot;
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              The Civic Truth Project is built by and for citizens who refuse to be silenced by biased reporting and overreaching governance.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
