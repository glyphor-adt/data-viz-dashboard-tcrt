import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

const featuresData = [
  {
    icon: Zap,
    title: 'Real-Time Data Updates',
    description: 'Stay ahead with visualizations that update in real-time, reflecting the latest data changes instantly.',
  },
  {
    icon: Shield,
    title: 'Secure Data Handling',
    description: 'Your data security is our top priority. We employ robust encryption and access controls to ensure your information is safe.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics Integration',
    description: 'Leverage predictive analytics to forecast trends and make proactive decisions, powered by advanced algorithms.',
  },
]

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Empowering Your Decisions with Data</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <feature.icon className="text-primary w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
