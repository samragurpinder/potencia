'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function TestSeries() {
  const [activeTab, setActiveTab] = useState('upcoming')

  const upcomingTests = [
    {
      id: '1',
      title: 'JEE Main Mock Test - 1',
      subject: 'Physics',
      date: '2024-03-20',
      time: '10:00 AM',
      duration: '3 hours',
      totalMarks: 100,
      type: 'Mock Test'
    },
    {
      id: '2',
      title: 'Chemistry Weekly Test',
      subject: 'Chemistry',
      date: '2024-03-21',
      time: '2:00 PM',
      duration: '1 hour',
      totalMarks: 50,
      type: 'Practice Test'
    }
  ]

  const completedTests = [
    {
      id: '3',
      title: 'Mathematics Chapter Test',
      subject: 'Mathematics',
      date: '2024-03-15',
      score: '85/100',
      rank: '12/150',
      accuracy: '78%',
      timeTaken: '2h 45m'
    },
    {
      id: '4',
      title: 'Physics Practice Test',
      subject: 'Physics',
      date: '2024-03-14',
      score: '45/50',
      rank: '8/150',
      accuracy: '90%',
      timeTaken: '55m'
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/dashboard" className="text-white hover:text-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <h1 className="ml-4 text-xl font-bold text-white">Test Series</h1>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="border-b border-white/10 mb-8">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'upcoming'
                    ? 'border-accent text-accent'
                    : 'border-transparent text-gray-400 hover:text-white hover:border-white/30'
                }`}
              >
                Upcoming Tests
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'completed'
                    ? 'border-accent text-accent'
                    : 'border-transparent text-gray-400 hover:text-white hover:border-white/30'
                }`}
              >
                Completed Tests
              </button>
            </nav>
          </div>

          {/* Test Lists */}
          {activeTab === 'upcoming' ? (
            <div className="space-y-6">
              {upcomingTests.map((test) => (
                <div key={test.id} className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white">{test.title}</h3>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-gray-400">Subject: {test.subject}</p>
                        <p className="text-sm text-gray-400">Date: {test.date}</p>
                        <p className="text-sm text-gray-400">Time: {test.time}</p>
                        <p className="text-sm text-gray-400">Duration: {test.duration}</p>
                        <p className="text-sm text-gray-400">Total Marks: {test.totalMarks}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        test.type === 'Mock Test' 
                          ? 'bg-blue-900/20 text-blue-400 border border-blue-700/50'
                          : 'bg-green-900/20 text-green-400 border border-green-700/50'
                      }`}>
                        {test.type}
                      </span>
                      <button className="px-4 py-2 bg-accent text-white rounded-lg text-sm hover:bg-accent/90 transition-colors">
                        Start Test
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {completedTests.map((test) => (
                <div key={test.id} className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white">{test.title}</h3>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-gray-400">Subject: {test.subject}</p>
                        <p className="text-sm text-gray-400">Date: {test.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">{test.score}</div>
                      <p className="text-sm text-gray-400">Rank: {test.rank}</p>
                      <p className="text-sm text-gray-400">Accuracy: {test.accuracy}</p>
                      <p className="text-sm text-gray-400">Time: {test.timeTaken}</p>
                      <button className="mt-4 px-4 py-2 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition-colors">
                        View Analysis
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
} 