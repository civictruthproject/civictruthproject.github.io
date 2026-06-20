import { Users, Megaphone, CheckCircle } from 'lucide-react'

const features = [
  {
    title: 'What we do',
    description: 'We track government actions and media narratives that compromise citizen rights, providing a platform for verification and dissent.',
    icon: Megaphone,
    color: 'text-blue-500'
  },
  {
    title: 'How we act',
    description: 'Through restricted chatrooms for deep coordination and public action polls to gauge and demonstrate citizen consensus.',
    icon: Users,
    color: 'text-green-500'
  },
  {
    title: 'Our Objective',
    description: 'To speak against any organization acting against citizens and to break the bias of media that favors power over truth.',
    icon: CheckCircle,
    color: 'text-red-500'
  }
]

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className={`p-4 rounded-full bg-slate-100 ${feature.color} mb-6`}>
                <feature.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
