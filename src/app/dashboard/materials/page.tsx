'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Video {
  id: string
  title: string
  subject: string
  duration: string
  instructor: string
  thumbnail: string
  views: number
  date: string
}

interface Note {
  id: string
  title: string
  subject: string
  type: string
  size: string
  downloads: number
  date: string
}

type Content = Video | Note

export default function StudyMaterials() {
  const [activeTab, setActiveTab] = useState('videos')
  const [selectedSubject, setSelectedSubject] = useState('all')

  const subjects = [
    { id: 'all', name: 'All Subjects' },
    { id: 'physics', name: 'Physics' },
    { id: 'chemistry', name: 'Chemistry' },
    { id: 'mathematics', name: 'Mathematics' }
  ]

  const videos: Video[] = [
    {
      id: '1',
      title: 'Mechanics - Newton\'s Laws',
      subject: 'physics',
      duration: '45:20',
      instructor: 'Dr. Singh',
      thumbnail: '/thumbnails/mechanics.jpg',
      views: 245,
      date: '2024-03-15'
    },
    {
      id: '2',
      title: 'Organic Chemistry - Alkanes',
      subject: 'chemistry',
      duration: '38:15',
      instructor: 'Dr. Kumar',
      thumbnail: '/thumbnails/organic.jpg',
      views: 189,
      date: '2024-03-14'
    },
    {
      id: '3',
      title: 'Calculus - Integration',
      subject: 'mathematics',
      duration: '52:30',
      instructor: 'Prof. Sharma',
      thumbnail: '/thumbnails/calculus.jpg',
      views: 312,
      date: '2024-03-13'
    }
  ]

  const notes: Note[] = [
    {
      id: '1',
      title: 'Physics Formula Sheet',
      subject: 'physics',
      type: 'PDF',
      size: '2.5 MB',
      downloads: 156,
      date: '2024-03-15'
    },
    {
      id: '2',
      title: 'Chemistry Reactions Handbook',
      subject: 'chemistry',
      type: 'PDF',
      size: '3.8 MB',
      downloads: 203,
      date: '2024-03-14'
    },
    {
      id: '3',
      title: 'Mathematics Problem Set',
      subject: 'mathematics',
      type: 'PDF',
      size: '1.2 MB',
      downloads: 178,
      date: '2024-03-13'
    }
  ]

  const filteredContent = (activeTab === 'videos' ? videos : notes)
    .filter(item => selectedSubject === 'all' || item.subject === selectedSubject)

  const isVideo = (content: Content): content is Video => {
    return 'instructor' in content
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
              <h1 className="ml-4 text-xl font-bold text-white">Study Materials</h1>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="border-b border-white/10 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('videos')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'videos'
                      ? 'border-accent text-accent'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-white/30'
                  }`}
                >
                  Video Lectures
                </button>
                <button
                  onClick={() => setActiveTab('notes')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'notes'
                      ? 'border-accent text-accent'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-white/30'
                  }`}
                >
                  Study Notes
                </button>
              </nav>
              <div className="mt-4 sm:mt-0">
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="bg-white/5 border border-white/10 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {subjects.map((subject) => (
                    <option key={subject.id} value={subject.id} className="bg-gray-900">
                      {subject.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          {activeTab === 'videos' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((content) => {
                if (!isVideo(content)) return null
                return (
                  <div key={content.id} className="bg-white/5 rounded-lg overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-800 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-white mb-2">{content.title}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{content.instructor}</span>
                        <span>{content.duration}</span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                        <span>{content.views} views</span>
                        <span>{content.date}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredContent.map((content) => {
                if (isVideo(content)) return null
                return (
                  <div key={content.id} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-white">{content.title}</h3>
                          <p className="text-sm text-gray-400">{content.type} • {content.size}</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-accent text-white rounded-lg text-sm hover:bg-accent/90 transition-colors">
                        Download
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                      <span>{content.downloads} downloads</span>
                      <span>Updated: {content.date}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  )
} 