'use client'

import { useState } from 'react'

const attendanceData = {
  overview: {
    totalClasses: 120,
    attended: 110,
    percentage: 92,
    leaves: 5,
    absents: 5
  },
  monthly: {
    month: 'March 2024',
    days: [
      { date: '2024-03-01', status: 'present' },
      { date: '2024-03-02', status: 'weekend' },
      { date: '2024-03-03', status: 'weekend' },
      { date: '2024-03-04', status: 'present' },
      { date: '2024-03-05', status: 'present' },
      { date: '2024-03-06', status: 'absent' },
      { date: '2024-03-07', status: 'present' },
      { date: '2024-03-08', status: 'present' },
      { date: '2024-03-09', status: 'weekend' },
      { date: '2024-03-10', status: 'weekend' },
      { date: '2024-03-11', status: 'present' },
      { date: '2024-03-12', status: 'present' },
      { date: '2024-03-13', status: 'leave' },
      { date: '2024-03-14', status: 'present' },
      { date: '2024-03-15', status: 'present' }
    ]
  },
  subjectWise: [
    { subject: 'Physics', attended: 35, total: 38, percentage: 92 },
    { subject: 'Chemistry', attended: 36, total: 40, percentage: 90 },
    { subject: 'Mathematics', attended: 39, total: 42, percentage: 93 }
  ]
}

export default function AttendancePage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-500/20 text-green-400'
      case 'absent':
        return 'bg-red-500/20 text-red-400'
      case 'leave':
        return 'bg-yellow-500/20 text-yellow-400'
      default:
        return 'bg-gray-500/20 text-gray-400'
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-white mb-8">Attendance Tracker</h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-400">Total Classes</h3>
            <p className="text-2xl font-bold text-white mt-2">
              {attendanceData.overview.totalClasses}
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-400">Classes Attended</h3>
            <p className="text-2xl font-bold text-accent mt-2">
              {attendanceData.overview.attended}
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-400">Attendance</h3>
            <p className="text-2xl font-bold text-white mt-2">
              {attendanceData.overview.percentage}%
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-400">Leaves Taken</h3>
            <p className="text-2xl font-bold text-yellow-400 mt-2">
              {attendanceData.overview.leaves}
            </p>
          </div>
        </div>

        {/* Monthly Calendar */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-medium text-white mb-4">
            {attendanceData.monthly.month}
          </h2>
          <div className="grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div
                key={day}
                className="text-center text-sm font-medium text-gray-400 py-2"
              >
                {day}
              </div>
            ))}
            {attendanceData.monthly.days.map((day) => (
              <button
                key={day.date}
                onClick={() => setSelectedDate(day.date)}
                className={`aspect-square p-2 rounded-lg ${
                  getStatusColor(day.status)
                } ${
                  selectedDate === day.date
                    ? 'ring-2 ring-accent'
                    : ''
                }`}
              >
                <span className="text-sm">
                  {new Date(day.date).getDate()}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Subject-wise Attendance */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h2 className="text-lg font-medium text-white mb-4">
            Subject-wise Attendance
          </h2>
          <div className="space-y-4">
            {attendanceData.subjectWise.map((subject) => (
              <div key={subject.subject} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white">{subject.subject}</span>
                  <span className="text-sm text-gray-400">
                    {subject.attended}/{subject.total} Classes
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent"
                    style={{ width: `${subject.percentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Attendance</span>
                  <span className="text-white">{subject.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 