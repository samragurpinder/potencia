'use client'

import { useState } from 'react'

const lecturesData = {
  subjects: [
    {
      id: 1,
      name: 'Physics',
      topics: [
        {
          id: 'phy1',
          name: 'Wave Optics',
          lectures: [
            {
              id: 1,
              title: 'Introduction to Wave Optics',
              duration: '45 min',
              watched: true,
              progress: 100,
              instructor: 'Mr. Naveen Kumar Dayam',
              thumbnail: '/physics-wave-optics.jpg'
            },
            {
              id: 2,
              title: 'Interference of Light',
              duration: '55 min',
              watched: false,
              progress: 60,
              instructor: 'Mr. Naveen Kumar Dayam',
              thumbnail: '/physics-interference.jpg'
            }
          ]
        },
        {
          id: 'phy2',
          name: 'Mechanics',
          lectures: [
            {
              id: 3,
              title: 'Newton Laws of Motion',
              duration: '50 min',
              watched: true,
              progress: 100,
              instructor: 'Mr. Naveen Kumar Dayam',
              thumbnail: '/physics-mechanics.jpg'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Chemistry',
      topics: [
        {
          id: 'chem1',
          name: 'Organic Chemistry',
          lectures: [
            {
              id: 4,
              title: 'Introduction to Organic Chemistry',
              duration: '60 min',
              watched: false,
              progress: 30,
              instructor: 'Mr. Akhliesh Kashyap',
              thumbnail: '/chemistry-organic.jpg'
            }
          ]
        }
      ]
    }
  ]
}

export default function LecturesPage() {
  const [activeSubject, setActiveSubject] = useState(lecturesData.subjects[0].id)
  const [activeTopic, setActiveTopic] = useState(lecturesData.subjects[0].topics[0].id)

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-white mb-8">Video Lectures</h1>

        {/* Subject Tabs */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {lecturesData.subjects.map((subject) => (
            <button
              key={subject.id}
              onClick={() => {
                setActiveSubject(subject.id)
                setActiveTopic(subject.topics[0].id)
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                activeSubject === subject.id
                  ? 'bg-accent text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {subject.name}
            </button>
          ))}
        </div>

        {/* Topic Tabs */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {lecturesData.subjects
            .find((s) => s.id === activeSubject)
            ?.topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                  activeTopic === topic.id
                    ? 'bg-white/10 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {topic.name}
              </button>
            ))}
        </div>

        {/* Lecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lecturesData.subjects
            .find((s) => s.id === activeSubject)
            ?.topics.find((t) => t.id === activeTopic)
            ?.lectures.map((lecture) => (
              <div
                key={lecture.id}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-black/50 relative">
                  {/* Play Button */}
                  <button className="absolute inset-0 flex items-center justify-center group">
                    <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                    <div
                      className="h-full bg-accent"
                      style={{ width: `${lecture.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-white font-medium mb-1">{lecture.title}</h3>
                  <p className="text-sm text-gray-400">{lecture.instructor}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-400">{lecture.duration}</span>
                    {lecture.watched ? (
                      <span className="text-sm text-green-400">Completed</span>
                    ) : (
                      <span className="text-sm text-accent">
                        {lecture.progress}% completed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
} 