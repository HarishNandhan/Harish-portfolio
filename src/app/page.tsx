"use client"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      {/* Test content */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">
          Harish Nandhan Portfolio
        </h1>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            I turn messy data into clear insights, dashboards, and decisions — and when needed, I let a bit of AI do the heavy lifting 🤖📊
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
            <p>Building scalable data pipelines and systems</p>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
            <p>Creating intelligent models and AI solutions</p>
          </div>
          
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
            <p>Extracting insights from complex datasets</p>
          </div>
          
          <div className="bg-pink-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">GenAI & LLMs</h3>
            <p>Building RAG systems and AI applications</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="https://github.com/HarishNandhan" 
            target="_blank"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  )
}