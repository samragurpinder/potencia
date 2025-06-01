'use client'

import { useState } from 'react'
import Link from 'next/link'

type QuickAction = {
  name: string;
  href?: string;
  onClick?: () => void;
  icon: JSX.Element;
}

// Mock student data (replace with actual data from backend)
const studentData = {
  name: "Gurpinder Singh",
  class: "XI",
  rollNumber: "2024/XI/001",
  batch: "JEE Advanced 2025",
  attendance: "92%",
  upcomingTests: [
    { id: 1, name: "Physics Weekly Test", date: "2024-03-20", time: "10:00 AM" },
    { id: 2, name: "Chemistry Mock Test", date: "2024-03-22", time: "2:00 PM" }
  ]
}

const navItems = [
  { id: 'overview', name: 'Overview', href: '/student/dashboard' },
  { id: 'materials', name: 'Study Material', href: '/student/materials' },
  { id: 'lectures', name: 'Video Lectures', href: '/student/lectures' },
  { id: 'tests', name: 'Tests & Results', href: '/student/tests' },
  { id: 'homework', name: 'Homework', href: '/student/homework' },
  { id: 'attendance', name: 'Attendance', href: '/student/attendance' },
  { id: 'forums', name: 'Forums', href: '/student/forums' }
]

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showDoubtModal, setShowDoubtModal] = useState(false)

  const quickActions: QuickAction[] = [
    {
      name: 'Ask a Doubt',
      onClick: () => setShowDoubtModal(true),
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'View Tests',
      href: '/student/tests',
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      name: 'Study Material',
      href: '/student/materials',
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      name: 'Join Class',
      href: '#',
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Top Bar */}
      <div className="bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-white">{studentData.name}</h1>
              <p className="text-sm text-gray-400">Class {studentData.class} | Roll No: {studentData.rollNumber}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-400">Attendance</p>
                <p className="text-lg font-bold text-accent">{studentData.attendance}</p>
              </div>
              <button
                onClick={() => setShowDoubtModal(true)}
                className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-md text-sm flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ask a Doubt</span>
              </button>
              <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm">
                View Profile
              </button>
              <button 
                onClick={() => window.location.href = '/'} 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`px-3 py-4 text-sm font-medium ${
                  activeTab === item.id
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Actions */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action) => (
                action.href ? (
                  <Link
                    key={action.name}
                    href={action.href}
                    className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {action.icon}
                    <span className="text-sm text-gray-400 mt-2">{action.name}</span>
                  </Link>
                ) : (
                  <button
                    key={action.name}
                    onClick={action.onClick}
                    className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {action.icon}
                    <span className="text-sm text-gray-400 mt-2">{action.name}</span>
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Upcoming Tests */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-lg font-bold text-white mb-4">Upcoming Tests</h2>
            <div className="space-y-4">
              {studentData.upcomingTests.map((test) => (
                <div key={test.id} className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-white font-medium">{test.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {test.date} at {test.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Overview */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-lg font-bold text-white mb-4">Performance Overview</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Physics</span>
                <div className="w-32 bg-white/10 rounded-full h-2">
                  <div className="bg-accent rounded-full h-2" style={{ width: '75%' }}></div>
                </div>
                <span className="text-white">75%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Chemistry</span>
                <div className="w-32 bg-white/10 rounded-full h-2">
                  <div className="bg-accent rounded-full h-2" style={{ width: '82%' }}></div>
                </div>
                <span className="text-white">82%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Mathematics</span>
                <div className="w-32 bg-white/10 rounded-full h-2">
                  <div className="bg-accent rounded-full h-2" style={{ width: '68%' }}></div>
                </div>
                <span className="text-white">68%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="space-y-8">
          {/* Notifications & Announcements */}
          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Notifications & Announcements
            </h2>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-accent font-medium">Exam Reminder</span>
                  <span className="text-sm text-gray-400">2 hours ago</span>
                </div>
                <p className="text-gray-300 mt-1">Physics Weekly Test scheduled for tomorrow at 10:00 AM</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-accent font-medium">Holiday Notice</span>
                  <span className="text-sm text-gray-400">1 day ago</span>
                </div>
                <p className="text-gray-300 mt-1">Institute will remain closed on March 25th for Holi celebrations</p>
              </div>
            </div>
          </section>

          {/* Performance Analytics */}
          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Performance Analytics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-3">Topic-wise Performance</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Kinematics</span>
                      <span className="text-accent">85%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-accent rounded-full h-2" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Thermodynamics</span>
                      <span className="text-accent">72%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-accent rounded-full h-2" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-3">Recent Test Scores</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Physics Weekly Test</span>
                    <span className="text-accent font-medium">92/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Chemistry Mock Test</span>
                    <span className="text-accent font-medium">88/100</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Smart Timetable */}
          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Today's Schedule
            </h2>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Physics</h3>
                    <p className="text-sm text-gray-400">Mr. Naveen Kumar Dayam</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent">10:00 AM - 11:30 AM</p>
                    <p className="text-sm text-gray-400">Room 201</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Chemistry</h3>
                    <p className="text-sm text-gray-400">Mr. Akhliesh Kashyap</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent">11:45 AM - 1:15 PM</p>
                    <p className="text-sm text-gray-400">Room 203</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Resource Library */}
          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Resource Library
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-2">Physics Notes</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-accent hover:underline">Chapter 1 - Kinematics</a>
                  <a href="#" className="block text-sm text-accent hover:underline">Chapter 2 - Laws of Motion</a>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-2">Chemistry Notes</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-accent hover:underline">Chapter 1 - Atomic Structure</a>
                  <a href="#" className="block text-sm text-accent hover:underline">Chapter 2 - Chemical Bonding</a>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-2">Mathematics Notes</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-accent hover:underline">Chapter 1 - Functions</a>
                  <a href="#" className="block text-sm text-accent hover:underline">Chapter 2 - Limits & Continuity</a>
                </div>
              </div>
            </div>
          </section>

          {/* Fee Details */}
          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Fee Details
            </h2>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Next Payment Due</span>
                  <span className="text-accent font-medium">April 1, 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Amount</span>
                  <span className="text-white font-medium">₹15,000</span>
                </div>
              </div>
              <button className="w-full bg-accent hover:bg-accent/90 text-white py-2 rounded-md">
                Pay Now
              </button>
            </div>
          </section>

          {/* Achievements & Ranks */}
          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Achievements & Ranks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-3">Recent Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.616a1 1 0 01.894-1.79l1.599.8L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-white">Physics Topper</p>
                      <p className="text-sm text-gray-400">Weekly Test - March 15</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-3">Class Rank</h3>
                <div className="text-center">
                  <span className="text-4xl font-bold text-accent">3</span>
                  <p className="text-gray-400 mt-1">out of 50 students</p>
                </div>
              </div>
            </div>
          </section>

          {/* Competitive Exam Corner */}
          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              JEE Advanced Preparation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-3">Countdown</h3>
                <div className="text-center">
                  <span className="text-3xl font-bold text-accent">245</span>
                  <p className="text-gray-400 mt-1">Days Remaining</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-3">Daily Challenge</h3>
                <button className="w-full bg-accent hover:bg-accent/90 text-white py-2 rounded-md">
                  Start Today's Quiz
                </button>
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Technical Support
            </h2>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-gray-300 mb-4">Having technical issues? Our support team is here to help!</p>
                <button className="w-full bg-accent hover:bg-accent/90 text-white py-2 rounded-md flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Chat with Support</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Ask a Doubt Modal */}
      {showDoubtModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Ask a Doubt</h2>
              <button
                onClick={() => setShowDoubtModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white [&>option]:bg-gray-900 [&>option]:text-white">
                  <option value="physics">Physics - Mr. Naveen Kumar Dayam</option>
                  <option value="chemistry">Chemistry - Mr. Akhliesh Kashyap</option>
                  <option value="mathematics">Mathematics - Mr. Jayant Kumar</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Topic
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white"
                  placeholder="Enter topic name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Doubt
                </label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white h-32"
                  placeholder="Describe your doubt in detail..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Attach Image (Optional)
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="w-full flex flex-col items-center px-4 py-6 bg-white/5 text-gray-400 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="mt-2 text-sm">Click to upload an image</span>
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowDoubtModal(false)}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Submit Doubt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 