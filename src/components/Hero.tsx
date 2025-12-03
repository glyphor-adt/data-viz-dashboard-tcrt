import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Unlock Actionable Insights with Our Data Visualization Dashboard</h1>
            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed mb-8">
              Transform raw data into stunning, interactive visualizations. Make data-driven decisions faster and more effectively.
            </p>
            <div className="flex">
              <a
                href="/signup"
                className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300"
              >
                Start Visualizing
              </a>
              <a
                href="/demo"
                className="border-2 border-gray-300 hover:border-blue-500 px-6 py-3 rounded-xl ml-4 transition-all duration-300"
              >
                Request a Demo
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600"
              alt="Data Visualization"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
