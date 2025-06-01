'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'Attendance', value: '85%', icon: '📊' },
    { label: 'Average Score', value: '78%', icon: '📈' },
    { label: 'Tests Completed', value: '24', icon: '✅' },
    { label: 'Next Test', value: 'Tomorrow', icon: '📝' }
  ]

  const upcomingClasses = [
    { subject: 'Physics', topic: 'Mechanics', time: '10:00 AM', teacher: 'Dr. Singh' },
    { subject: 'Chemistry', topic: 'Organic Chemistry', time: '11:30 AM', teacher: 'Dr. Kumar' },
    { subject: 'Mathematics', topic: 'Calculus', time: '2:00 PM', teacher: 'Prof. Sharma' }
  ]

  const recentTests = [
    { subject: 'Physics', score: '85%', date: '2024-03-15', rank: '12' },
    { subject: 'Chemistry', score: '92%', date: '2024-03-14', rank: '8' },
    { subject: 'Mathematics', score: '88%', date: '2024-03-13', rank: '15' }
  ]

  const notifications = [
    { title: 'Test Reminder', message: 'Physics test tomorrow at 10 AM', type: 'warning' },
    { title: 'New Study Material', message: 'Chemistry notes uploaded', type: 'info' },
    { title: 'Fee Due', message: 'Monthly fee due in 5 days', type: 'error' }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Top Navigation */}
      <nav className="bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-accent">Student Dashboard</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-full hover:bg-white/10">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="ml-4 relative flex items-center space-x-3">
                <img className="h-8 w-8 rounded-full" src="https://ui-avatars.com/api/?name=John+Doe" alt="" />
                <span className="text-sm font-medium text-white">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 overflow-hidden rounded-lg p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-400 truncate">{stat.label}</dt>
                      <dd className="text-lg font-bold text-white">{stat.value}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Upcoming Classes */}
            <div className="bg-white/5 rounded-lg p-6">
              <h2 className="text-lg font-medium text-white mb-4">Today's Schedule</h2>
              <div className="space-y-4">
                {upcomingClasses.map((class_, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div>
                      <h3 className="text-sm font-medium text-white">{class_.subject}</h3>
                      <p className="text-xs text-gray-400">{class_.topic}</p>
                      <p className="text-xs text-gray-400">{class_.teacher}</p>
                    </div>
                    <div className="text-sm text-accent">{class_.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Tests */}
            <div className="bg-white/5 rounded-lg p-6">
              <h2 className="text-lg font-medium text-white mb-4">Recent Tests</h2>
              <div className="space-y-4">
                {recentTests.map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div>
                      <h3 className="text-sm font-medium text-white">{test.subject}</h3>
                      <p className="text-xs text-gray-400">Date: {test.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-accent">{test.score}</p>
                      <p className="text-xs text-gray-400">Rank: {test.rank}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="mt-10">
            <h2 className="text-lg font-medium text-white mb-4">Notifications</h2>
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div key={index} className={`p-4 rounded-lg ${
                  notification.type === 'warning' ? 'bg-yellow-900/20 border border-yellow-700/50' :
                  notification.type === 'error' ? 'bg-red-900/20 border border-red-700/50' :
                  'bg-white/5 border border-white/10'
                }`}>
                  <h3 className="text-sm font-medium text-white">{notification.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">{notification.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            <Link href="/dashboard/tests" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center">
              <svg className="w-6 h-6 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span className="block mt-2 text-sm">Take Test</span>
            </Link>
            <Link href="/dashboard/materials" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center">
              <svg className="w-6 h-6 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="block mt-2 text-sm">Study Material</span>
            </Link>
            <Link href="/dashboard/attendance" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center">
              <svg className="w-6 h-6 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="block mt-2 text-sm">Attendance</span>
            </Link>
            <Link href="/dashboard/payments" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center">
              <svg className="w-6 h-6 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="block mt-2 text-sm">Payments</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
} 