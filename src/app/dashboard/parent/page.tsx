'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Student {
  id: string
  name: string
  class: string
  rollNo: string
  attendance: string
  performance: string
}

interface FeeDetail {
  id: string
  month: string
  amount: number
  dueDate: string
  status: 'paid' | 'pending' | 'overdue'
}

interface Announcement {
  id: string
  title: string
  message: string
  date: string
  type: 'info' | 'important' | 'event'
}

export default function ParentPortal() {
  const [activeTab, setActiveTab] = useState('overview')

  const student: Student = {
    id: '1',
    name: 'Arjun Singh',
    class: 'XI - Non Medical',
    rollNo: 'A123',
    attendance: '85%',
    performance: 'Good'
  }

  const feeDetails: FeeDetail[] = [
    {
      id: '1',
      month: 'March 2024',
      amount: 12500,
      dueDate: '2024-03-25',
      status: 'pending'
    },
    {
      id: '2',
      month: 'February 2024',
      amount: 12500,
      dueDate: '2024-02-25',
      status: 'paid'
    },
    {
      id: '3',
      month: 'January 2024',
      amount: 12500,
      dueDate: '2024-01-25',
      status: 'paid'
    }
  ]

  const announcements: Announcement[] = [
    {
      id: '1',
      title: 'Parent-Teacher Meeting',
      message: 'PTM scheduled for March 25th, 2024 at 10:00 AM',
      date: '2024-03-15',
      type: 'important'
    },
    {
      id: '2',
      title: 'Test Series Schedule',
      message: 'JEE Main Mock Test series starting from April 1st',
      date: '2024-03-14',
      type: 'info'
    },
    {
      id: '3',
      title: 'Science Exhibition',
      message: 'Annual Science Exhibition on March 30th',
      date: '2024-03-13',
      type: 'event'
    }
  ]

  const performanceData = [
    { subject: 'Physics', score: 85, average: 75 },
    { subject: 'Chemistry', score: 92, average: 78 },
    { subject: 'Mathematics', score: 88, average: 72 }
  ]

  const getStatusColor = (status: FeeDetail['status']) => {
    switch (status) {
      case 'paid':
        return 'bg-green-900/20 text-green-400 border-green-700/50'
      case 'pending':
        return 'bg-yellow-900/20 text-yellow-400 border-yellow-700/50'
      case 'overdue':
        return 'bg-red-900/20 text-red-400 border-red-700/50'
    }
  }

  const getAnnouncementColor = (type: Announcement['type']) => {
    switch (type) {
      case 'important':
        return 'bg-red-900/20 border-red-700/50'
      case 'event':
        return 'bg-blue-900/20 border-blue-700/50'
      default:
        return 'bg-white/5 border-white/10'
    }
  }

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
              <h1 className="ml-4 text-xl font-bold text-white">Parent Portal</h1>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Student Info Card */}
          <div className="bg-white/5 rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6">
                <h2 className="text-2xl font-bold text-white">{student.name}</h2>
                <div className="mt-1 flex items-center space-x-4 text-sm text-gray-400">
                  <span>Class: {student.class}</span>
                  <span>•</span>
                  <span>Roll No: {student.rollNo}</span>
                  <span>•</span>
                  <span>Attendance: {student.attendance}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Performance Chart */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-medium text-white mb-6">Academic Performance</h3>
                <div className="space-y-4">
                  {performanceData.map((subject) => (
                    <div key={subject.subject}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white">{subject.subject}</span>
                        <span className="text-accent">{subject.score}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${subject.score}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Class Average: {subject.average}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fee Details */}
            <div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-medium text-white mb-6">Fee Details</h3>
                <div className="space-y-4">
                  {feeDetails.map((fee) => (
                    <div key={fee.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div>
                        <h4 className="text-sm font-medium text-white">{fee.month}</h4>
                        <p className="text-xs text-gray-400">Due: {fee.dueDate}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-white">₹{fee.amount}</p>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(fee.status)}`}>
                          {fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  ))}
                  <button className="w-full mt-4 px-4 py-2 bg-accent text-white rounded-lg text-sm hover:bg-accent/90 transition-colors">
                    Pay Fees
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Announcements */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-white mb-6">Announcements & Updates</h3>
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className={`p-4 rounded-lg border ${getAnnouncementColor(announcement.type)}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-medium text-white">{announcement.title}</h4>
                      <p className="mt-1 text-sm text-gray-400">{announcement.message}</p>
                    </div>
                    <span className="text-xs text-gray-400">{announcement.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 