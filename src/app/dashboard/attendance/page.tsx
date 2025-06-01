'use client'

import { useState } from 'react'
import Link from 'next/link'

interface AttendanceRecord {
  date: string
  status: 'present' | 'absent' | 'late'
  subject: string
  time: string
  teacher: string
}

export default function Attendance() {
  const [selectedMonth, setSelectedMonth] = useState('March')

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const attendanceStats = {
    totalClasses: 45,
    present: 38,
    absent: 5,
    late: 2,
    percentage: '84.44%'
  }

  const recentAttendance: AttendanceRecord[] = [
    {
      date: '2024-03-15',
      status: 'present',
      subject: 'Physics',
      time: '10:00 AM',
      teacher: 'Dr. Singh'
    },
    {
      date: '2024-03-14',
      status: 'present',
      subject: 'Chemistry',
      time: '11:30 AM',
      teacher: 'Dr. Kumar'
    },
    {
      date: '2024-03-13',
      status: 'late',
      subject: 'Mathematics',
      time: '2:00 PM',
      teacher: 'Prof. Sharma'
    },
    {
      date: '2024-03-12',
      status: 'absent',
      subject: 'Physics',
      time: '10:00 AM',
      teacher: 'Dr. Singh'
    }
  ]

  // Generate calendar days
  const daysInMonth = 31 // Example for March
  const firstDayOfMonth = 5 // Friday (0 = Sunday, 6 = Saturday)
  const calendarDays = Array.from({ length: daysInMonth + firstDayOfMonth }, (_, i) => {
    if (i < firstDayOfMonth) return null
    return i - firstDayOfMonth + 1
  })

  const getStatusColor = (status: AttendanceRecord['status']) => {
    switch (status) {
      case 'present':
        return 'bg-green-900/20 text-green-400 border-green-700/50'
      case 'absent':
        return 'bg-red-900/20 text-red-400 border-red-700/50'
      case 'late':
        return 'bg-yellow-900/20 text-yellow-400 border-yellow-700/50'
      default:
        return 'bg-white/5 text-white border-white/10'
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
              <h1 className="ml-4 text-xl font-bold text-white">Attendance</h1>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <div className="bg-white/5 overflow-hidden rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-400 truncate">Total Classes</dt>
                    <dd className="text-lg font-bold text-white">{attendanceStats.totalClasses}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-white/5 overflow-hidden rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl">✅</span>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-400 truncate">Present</dt>
                    <dd className="text-lg font-bold text-green-400">{attendanceStats.present}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-white/5 overflow-hidden rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl">❌</span>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-400 truncate">Absent</dt>
                    <dd className="text-lg font-bold text-red-400">{attendanceStats.absent}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-white/5 overflow-hidden rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-400 truncate">Late</dt>
                    <dd className="text-lg font-bold text-yellow-400">{attendanceStats.late}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-white/5 overflow-hidden rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl">📈</span>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-400 truncate">Percentage</dt>
                    <dd className="text-lg font-bold text-accent">{attendanceStats.percentage}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-white">Calendar View</h2>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="bg-white/5 border border-white/10 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {months.map((month) => (
                  <option key={month} value={month} className="bg-gray-900">
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-400">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`aspect-square flex items-center justify-center rounded-lg border ${
                      day ? 'bg-white/5 border-white/10' : ''
                    }`}
                  >
                    {day && (
                      <span className="text-sm font-medium text-white">
                        {day}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Attendance */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-white mb-6">Recent Attendance</h2>
            <div className="space-y-4">
              {recentAttendance.map((record, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(record.status)}`}>
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </span>
                        <span className="ml-4 text-sm text-gray-400">{record.date}</span>
                      </div>
                      <div className="mt-2">
                        <h3 className="text-sm font-medium text-white">{record.subject}</h3>
                        <p className="text-xs text-gray-400">{record.teacher}</p>
                      </div>
                    </div>
                    <div className="text-sm text-accent">{record.time}</div>
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