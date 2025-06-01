'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// Mock data for the dashboard
const studentData = {
  name: "Gurpinder Singh",
  class: "XI",
  rollNumber: "2024/XI/001",
  batch: "JEE Advanced 2025",
  photo: "/student-photo.jpg", // Add a default photo path
  contact: {
    student: "+91 98765-43210",
    parent: "+91 98765-43211",
    email: "gurpinder@example.com"
  },
  mentor: {
    name: "Mr. Naveen Kumar Dayam",
    subject: "Physics",
    contact: "+91 98765-43212"
  },
  attendance: {
    overall: "92%",
    subjects: {
      Physics: "95%",
      Chemistry: "90%",
      Mathematics: "91%"
    },
    recent: [
      { date: "2024-03-18", status: "Present", subjects: ["Physics", "Chemistry"] },
      { date: "2024-03-17", status: "Late", subjects: ["Mathematics"] },
      { date: "2024-03-16", status: "Absent", reason: "Medical appointment", subjects: ["Physics"] }
    ]
  },
  performance: {
    rank: 3,
    totalStudents: 50,
    subjects: {
      Physics: [85, 88, 92, 90, 95],
      Chemistry: [80, 82, 85, 88, 87],
      Mathematics: [75, 78, 82, 85, 88]
    }
  },
  fees: {
    total: 120000,
    paid: 90000,
    due: 30000,
    nextPayment: {
      amount: 15000,
      dueDate: "2024-04-01"
    },
    history: [
      { date: "2024-01-15", amount: 45000, receipt: "REC001" },
      { date: "2023-10-10", amount: 45000, receipt: "REC002" }
    ]
  },
  homework: [
    {
      subject: "Physics",
      topic: "Kinematics",
      dueDate: "2024-03-20",
      status: "Pending",
      description: "Solve problems from Chapter 3, Page 45-47"
    },
    {
      subject: "Chemistry",
      topic: "Chemical Bonding",
      dueDate: "2024-03-19",
      status: "Submitted",
      description: "Complete worksheet on Ionic Bonds",
      feedback: "Good work! Keep it up."
    }
  ],
  alerts: [
    {
      type: "performance",
      message: "Physics performance improved by 10% this month",
      severity: "success"
    },
    {
      type: "attendance",
      message: "Missed Mathematics class on March 16",
      severity: "warning"
    }
  ],
  transport: {
    vehicleNo: "PB 03 X 1234",
    driverName: "Mr. Singh",
    driverContact: "+91 98765-43213",
    route: "Route 3 - Model Town",
    currentLocation: { lat: 30.2010, lng: 74.9355 }
  }
}

export default function ParentDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  // Performance chart data
  const performanceData = {
    labels: ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5'],
    datasets: [
      {
        label: 'Physics',
        data: studentData.performance.subjects.Physics,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'Chemistry',
        data: studentData.performance.subjects.Chemistry,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Mathematics',
        data: studentData.performance.subjects.Mathematics,
        borderColor: 'rgb(53, 162, 235)',
        tension: 0.1
      }
    ]
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Top Navigation */}
      <nav className="bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">Parent Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm">
                Notifications
              </button>
              <Link href="/" className="text-white hover:text-accent">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Student Profile Card */}
        <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{studentData.name}</h2>
                <p className="text-gray-400">Class {studentData.class} | Roll No: {studentData.rollNumber}</p>
                <p className="text-accent">{studentData.batch}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">Contact Information</h3>
              <p className="text-white">Student: {studentData.contact.student}</p>
              <p className="text-white">Parent: {studentData.contact.parent}</p>
              <p className="text-white">{studentData.contact.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">Mentor Details</h3>
              <p className="text-white">{studentData.mentor.name}</p>
              <p className="text-gray-400">{studentData.mentor.subject} Teacher</p>
              <p className="text-accent">{studentData.mentor.contact}</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-medium text-white mb-4">Attendance Overview</h3>
            <div className="text-3xl font-bold text-accent mb-2">{studentData.attendance.overall}</div>
            <div className="space-y-2">
              {Object.entries(studentData.attendance.subjects).map(([subject, attendance]) => (
                <div key={subject} className="flex justify-between text-sm">
                  <span className="text-gray-400">{subject}</span>
                  <span className="text-white">{attendance}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-medium text-white mb-4">Academic Rank</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">{studentData.performance.rank}</div>
              <p className="text-gray-400">out of {studentData.performance.totalStudents} students</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-medium text-white mb-4">Fee Status</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Fee</span>
                <span className="text-white">₹{studentData.fees.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Paid Amount</span>
                <span className="text-accent">₹{studentData.fees.paid}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Due Amount</span>
                <span className="text-red-400">₹{studentData.fees.due}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Graph */}
        <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h3 className="text-lg font-medium text-white mb-4">Performance Trends</h3>
          <div className="h-[300px]">
            <Line
              data={performanceData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                      color: 'rgba(255, 255, 255, 0.7)'
                    }
                  },
                  x: {
                    grid: {
                      color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                      color: 'rgba(255, 255, 255, 0.7)'
                    }
                  }
                },
                plugins: {
                  legend: {
                    labels: {
                      color: 'rgba(255, 255, 255, 0.7)'
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Recent Activity and Homework */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Recent Activity */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-medium text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {studentData.attendance.recent.map((day, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    day.status === 'Present' ? 'bg-green-400' :
                    day.status === 'Late' ? 'bg-yellow-400' : 'bg-red-400'
                  }`} />
                  <div>
                    <p className="text-white">{new Date(day.date).toLocaleDateString()}</p>
                    <p className="text-gray-400">
                      {day.status} - {day.subjects.join(', ')}
                    </p>
                    {day.reason && (
                      <p className="text-sm text-red-400">Reason: {day.reason}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Homework Status */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-medium text-white mb-4">Homework Status</h3>
            <div className="space-y-4">
              {studentData.homework.map((hw, index) => (
                <div key={index} className="bg-white/5 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-white font-medium">{hw.subject}</h4>
                      <p className="text-sm text-gray-400">{hw.topic}</p>
                    </div>
                    <span className={`text-sm px-2 py-1 rounded ${
                      hw.status === 'Submitted' ? 'bg-green-400/10 text-green-400' :
                      'bg-yellow-400/10 text-yellow-400'
                    }`}>
                      {hw.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{hw.description}</p>
                  {hw.feedback && (
                    <p className="text-sm text-green-400 mt-2">Feedback: {hw.feedback}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transport Tracking */}
        <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h3 className="text-lg font-medium text-white mb-4">Transport Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Vehicle Number</span>
                <span className="text-white">{studentData.transport.vehicleNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Driver</span>
                <span className="text-white">{studentData.transport.driverName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Contact</span>
                <span className="text-accent">{studentData.transport.driverContact}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Route</span>
                <span className="text-white">{studentData.transport.route}</span>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-center text-gray-400">Live location tracking will be available soon</p>
            </div>
          </div>
        </div>

        {/* Smart Alerts */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-medium text-white mb-4">Smart Alerts</h3>
          <div className="space-y-4">
            {studentData.alerts.map((alert, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  alert.severity === 'success' ? 'bg-green-400/10 border border-green-400/20' :
                  alert.severity === 'warning' ? 'bg-yellow-400/10 border border-yellow-400/20' :
                  'bg-red-400/10 border border-red-400/20'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    alert.severity === 'success' ? 'bg-green-400' :
                    alert.severity === 'warning' ? 'bg-yellow-400' :
                    'bg-red-400'
                  }`}>
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {alert.severity === 'success' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      )}
                    </svg>
                  </div>
                  <div>
                    <p className={`${
                      alert.severity === 'success' ? 'text-green-400' :
                      alert.severity === 'warning' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {alert.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 