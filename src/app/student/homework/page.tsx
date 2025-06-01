'use client'

import { useState } from 'react'

const homeworkData = {
  pending: [
    {
      id: 1,
      subject: 'Physics',
      title: 'Wave Optics Problems',
      dueDate: '2024-03-25',
      status: 'pending',
      description: 'Complete problems 1-10 from Chapter 5',
      type: 'pdf'
    },
    {
      id: 2,
      subject: 'Chemistry',
      title: 'Organic Chemistry Assignment',
      dueDate: '2024-03-23',
      status: 'pending',
      description: 'IUPAC naming practice worksheet',
      type: 'online'
    }
  ],
  submitted: [
    {
      id: 3,
      subject: 'Mathematics',
      title: 'Integration Practice',
      submittedDate: '2024-03-15',
      status: 'graded',
      score: 92,
      feedback: 'Excellent work! Keep it up.',
      type: 'pdf'
    },
    {
      id: 4,
      subject: 'Physics',
      title: 'Mechanics Assignment',
      submittedDate: '2024-03-10',
      status: 'submitted',
      type: 'online'
    }
  ]
}

export default function HomeworkPage() {
  const [activeTab, setActiveTab] = useState('pending')

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-white mb-8">Homework & Assignments</h1>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'pending'
                ? 'bg-accent text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            Pending ({homeworkData.pending.length})
          </button>
          <button
            onClick={() => setActiveTab('submitted')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'submitted'
                ? 'bg-accent text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            Submitted
          </button>
        </div>

        {/* Pending Assignments */}
        {activeTab === 'pending' && (
          <div className="space-y-4">
            {homeworkData.pending.map((assignment) => (
              <div
                key={assignment.id}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-medium text-white">
                        {assignment.title}
                      </h3>
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                        Due {assignment.dueDate}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{assignment.subject}</p>
                    <p className="text-sm text-gray-400 mt-2">{assignment.description}</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-md text-sm">
                      View Details
                    </button>
                    <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm">
                      {assignment.type === 'pdf' ? 'Upload Submission' : 'Start Assignment'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Submitted Assignments */}
        {activeTab === 'submitted' && (
          <div className="space-y-4">
            {homeworkData.submitted.map((assignment) => (
              <div
                key={assignment.id}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-medium text-white">
                        {assignment.title}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          assignment.status === 'graded'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        {assignment.status === 'graded' ? 'Graded' : 'Submitted'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{assignment.subject}</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Submitted on {assignment.submittedDate}
                    </p>
                    {assignment.status === 'graded' && (
                      <div className="mt-4">
                        <p className="text-sm text-white">Score: {assignment.score}%</p>
                        <p className="text-sm text-gray-400 mt-1">{assignment.feedback}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-md text-sm">
                      View Submission
                    </button>
                    {assignment.status === 'graded' && (
                      <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm">
                        View Feedback
                      </button>
                    )}
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