'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

// Mock data for the dashboard
const facultyData = {
  profile: {
    name: "Mr. Naveen Kumar Dayam",
    subjects: ["Physics"],
    photo: "/faculty-photo.jpg",
    lastLogin: "2024-03-19 08:30 AM",
    totalStudents: 150,
    upcomingClasses: 3,
    designation: "CEO, HOD Physics",
    expertise: "JEE Advanced Physics"
  },
  schedule: {
    today: [
      {
        time: "09:00 AM - 10:30 AM",
        batch: "XI-A",
        subject: "Physics",
        topic: "Kinematics",
        type: "Live Class",
        status: "upcoming"
      },
      {
        time: "11:00 AM - 12:30 PM",
        batch: "XII-B",
        subject: "Physics",
        topic: "Electromagnetic Waves",
        type: "Live Class",
        status: "upcoming"
      },
      {
        time: "02:00 PM - 03:30 PM",
        batch: "XI-B",
        subject: "Physics",
        topic: "Forces and Laws of Motion",
        type: "Test",
        status: "upcoming"
      }
    ],
    breaks: [
      { time: "10:30 AM - 11:00 AM", duration: "30 mins" },
      { time: "12:30 PM - 02:00 PM", duration: "90 mins" }
    ]
  },
  performance: {
    weakStudents: [
      {
        name: "Student 1",
        rollNumber: "2024/XI/015",
        avgScore: 45,
        missedClasses: 3,
        pendingAssignments: 2
      },
      {
        name: "Student 2",
        rollNumber: "2024/XI/023",
        avgScore: 52,
        missedClasses: 2,
        pendingAssignments: 3
      }
    ],
    batchPerformance: {
      "XI-A": [75, 78, 82, 80, 85],
      "XI-B": [70, 72, 75, 78, 76],
      "XII-A": [85, 82, 88, 86, 90],
      "XII-B": [80, 83, 85, 82, 88]
    }
  },
  homework: {
    pending: [
      {
        batch: "XI-A",
        subject: "Physics",
        topic: "Kinematics Problems",
        dueDate: "2024-03-20",
        submitted: 25,
        total: 30
      },
      {
        batch: "XII-B",
        subject: "Physics",
        topic: "EM Waves Assignment",
        dueDate: "2024-03-21",
        submitted: 28,
        total: 35
      }
    ]
  },
  resources: {
    recentUploads: [
      {
        title: "Kinematics Formula Sheet",
        type: "PDF",
        date: "2024-03-18",
        downloads: 45
      },
      {
        title: "EM Waves Video Lecture",
        type: "Video",
        date: "2024-03-17",
        views: 120
      }
    ]
  },
  activity: {
    monthlyStats: {
      classesScheduled: 60,
      classesTaken: 58,
      attendance: "96.67%",
      studentFeedback: 4.8
    },
    salary: {
      basic: 85000,
      incentives: 15000,
      total: 100000
    }
  }
}

export default function FacultyDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  // Performance chart data
  const performanceData = {
    labels: ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5'],
    datasets: Object.entries(facultyData.performance.batchPerformance).map(([batch, scores]) => ({
      label: batch,
      data: scores,
      borderColor: batch.startsWith('XI') ? 
        (batch.endsWith('A') ? 'rgb(255, 99, 132)' : 'rgb(75, 192, 192)') :
        (batch.endsWith('A') ? 'rgb(53, 162, 235)' : 'rgb(255, 159, 64)'),
      tension: 0.1
    }))
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Top Navigation */}
      <nav className="bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">Faculty Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm">
                Start Live Class
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-md text-sm">
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
        {/* Faculty Profile Card */}
        <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{facultyData.profile.name}</h2>
                <p className="text-gray-400">{facultyData.profile.designation}</p>
                <p className="text-accent">{facultyData.profile.expertise}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">Quick Stats</h3>
              <p className="text-white">Total Students: {facultyData.profile.totalStudents}</p>
              <p className="text-white">Upcoming Classes: {facultyData.profile.upcomingClasses}</p>
              <p className="text-gray-400">Last Login: {facultyData.profile.lastLogin}</p>
            </div>
            <div className="flex flex-col justify-center">
              <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm mb-2">
                Mark Attendance
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-md text-sm">
                Upload Study Material
              </button>
            </div>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-medium text-white mb-4">Today's Schedule</h3>
              <div className="space-y-4">
                {facultyData.schedule.today.map((session, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white font-medium">{session.time}</p>
                        <p className="text-sm text-gray-400">{session.batch} - {session.subject}</p>
                        <p className="text-sm text-accent">{session.topic}</p>
                      </div>
                      <button className={`px-4 py-2 rounded-md text-sm ${
                        session.type === 'Live Class' 
                          ? 'bg-accent hover:bg-accent/90 text-white'
                          : 'bg-white/5 hover:bg-white/10 text-white'
                      }`}>
                        {session.type === 'Live Class' ? 'Start Class' : 'Start Test'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-medium text-white mb-4">Break Schedule</h3>
              <div className="space-y-4">
                {facultyData.schedule.breaks.map((break_, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg">
                    <p className="text-white font-medium">{break_.time}</p>
                    <p className="text-sm text-gray-400">Duration: {break_.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-medium text-white mb-4">Batch Performance Trends</h3>
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
          </div>

          <div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-medium text-white mb-4">Students Needing Attention</h3>
              <div className="space-y-4">
                {facultyData.performance.weakStudents.map((student, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg">
                    <p className="text-white font-medium">{student.name}</p>
                    <p className="text-sm text-gray-400">Roll No: {student.rollNumber}</p>
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Average Score</span>
                        <span className="text-red-400">{student.avgScore}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Missed Classes</span>
                        <span className="text-yellow-400">{student.missedClasses}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Pending Work</span>
                        <span className="text-red-400">{student.pendingAssignments}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Homework & Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">Homework Tracker</h3>
                <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm">
                  Assign New
                </button>
              </div>
              <div className="space-y-4">
                {facultyData.homework.pending.map((hw, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-white font-medium">{hw.topic}</p>
                        <p className="text-sm text-gray-400">{hw.batch} - Due: {hw.dueDate}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-accent">{hw.submitted}/{hw.total} Submitted</p>
                        <button className="text-sm text-accent hover:text-accent/80 mt-1">
                          View Details
                        </button>
                      </div>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div 
                        className="bg-accent rounded-full h-2" 
                        style={{ width: `${(hw.submitted/hw.total)*100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">Recent Resources</h3>
                <button className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-md text-sm">
                  Upload New
                </button>
              </div>
              <div className="space-y-4">
                {facultyData.resources.recentUploads.map((resource, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white font-medium">{resource.title}</p>
                        <p className="text-sm text-gray-400">Uploaded: {resource.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          resource.type === 'PDF' ? 'bg-red-400/10 text-red-400' :
                          'bg-blue-400/10 text-blue-400'
                        }`}>
                          {resource.type}
                        </span>
                        <button className="text-accent hover:text-accent/80">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      {resource.type === 'PDF' ? `${resource.downloads} downloads` : `${resource.views} views`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Activity & Salary */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Monthly Activity</h3>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Classes Scheduled</p>
                      <p className="text-xl font-bold text-white">{facultyData.activity.monthlyStats.classesScheduled}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Classes Taken</p>
                      <p className="text-xl font-bold text-accent">{facultyData.activity.monthlyStats.classesTaken}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Attendance</p>
                      <p className="text-xl font-bold text-green-400">{facultyData.activity.monthlyStats.attendance}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Student Feedback</p>
                      <p className="text-xl font-bold text-yellow-400">{facultyData.activity.monthlyStats.studentFeedback}/5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-4">Salary Details</h3>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Basic Salary</span>
                    <span className="text-white">₹{facultyData.activity.salary.basic}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Performance Incentives</span>
                    <span className="text-accent">₹{facultyData.activity.salary.incentives}</span>
                  </div>
                  <div className="border-t border-white/10 mt-2 pt-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total</span>
                      <span className="text-xl font-bold text-white">₹{facultyData.activity.salary.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 