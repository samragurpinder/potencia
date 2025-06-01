'use client'

import { useState } from 'react'

// Mock data
const testData = {
  upcomingTests: [
    {
      id: 1,
      name: "Physics Weekly Test - Wave Optics",
      date: "2024-03-20",
      time: "10:00 AM",
      duration: "1 hour",
      topics: ["Wave nature of light", "Interference", "Diffraction"]
    },
    {
      id: 2,
      name: "Chemistry Mock Test - Organic Chemistry",
      date: "2024-03-22",
      time: "2:00 PM",
      duration: "2 hours",
      topics: ["Alcohols", "Ethers", "Aldehydes"]
    }
  ],
  pastTests: [
    {
      id: 101,
      name: "Mathematics Full Test",
      date: "2024-03-15",
      score: 85,
      rank: 5,
      totalStudents: 120,
      answerKey: "available",
      solutions: "available"
    },
    {
      id: 102,
      name: "Physics Mechanics Test",
      date: "2024-03-10",
      score: 78,
      rank: 12,
      totalStudents: 120,
      answerKey: "available",
      solutions: "available"
    }
  ]
}

export default function TestsPage() {
  const [activeTab, setActiveTab] = useState('upcoming')

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-8">Tests & Results</h1>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'upcoming'
                ? 'bg-accent text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            Upcoming Tests
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'past'
                ? 'bg-accent text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            Past Tests & Results
          </button>
        </div>

        {/* Upcoming Tests */}
        {activeTab === 'upcoming' && (
          <div className="space-y-4">
            {testData.upcomingTests.map((test) => (
              <div key={test.id} className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-white">{test.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {test.date} at {test.time} • {test.duration}
                    </p>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-white">Topics:</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {test.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm">
                    Set Reminder
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Past Tests */}
        {activeTab === 'past' && (
          <div className="space-y-4">
            {testData.pastTests.map((test) => (
              <div key={test.id} className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-white">{test.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">{test.date}</p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Score</p>
                        <p className="text-2xl font-bold text-accent">{test.score}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Rank</p>
                        <p className="text-2xl font-bold text-white">
                          {test.rank}/{test.totalStudents}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    {test.answerKey === 'available' && (
                      <button className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-md text-sm">
                        Answer Key
                      </button>
                    )}
                    {test.solutions === 'available' && (
                      <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm">
                        View Solutions
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Performance Graph */}
                <div className="mt-6">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent"
                      style={{ width: `${test.score}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-gray-400">
                    <span>0%</span>
                    <span>Class Average: 72%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 