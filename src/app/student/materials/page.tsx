'use client'

import { useState } from 'react'

const materials = {
  subjects: [
    {
      id: 1,
      name: 'Physics',
      topics: [
        {
          id: 'phy1',
          name: 'Wave Optics',
          resources: [
            { id: 1, type: 'pdf', name: 'Wave Optics Notes', size: '2.4 MB' },
            { id: 2, type: 'video', name: 'Wave Nature of Light', duration: '45 min' },
            { id: 3, type: 'pdf', name: 'Practice Problems', size: '1.8 MB' }
          ]
        },
        {
          id: 'phy2',
          name: 'Mechanics',
          resources: [
            { id: 4, type: 'pdf', name: 'Laws of Motion', size: '3.1 MB' },
            { id: 5, type: 'video', name: 'Newton Laws Explained', duration: '60 min' }
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
          resources: [
            { id: 6, type: 'pdf', name: 'Alcohols & Ethers', size: '4.2 MB' },
            { id: 7, type: 'video', name: 'IUPAC Nomenclature', duration: '55 min' }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Mathematics',
      topics: [
        {
          id: 'math1',
          name: 'Calculus',
          resources: [
            { id: 8, type: 'pdf', name: 'Integration Methods', size: '5.1 MB' },
            { id: 9, type: 'video', name: 'Definite Integrals', duration: '40 min' }
          ]
        }
      ]
    }
  ]
}

export default function StudyMaterialsPage() {
  const [activeSubject, setActiveSubject] = useState(materials.subjects[0].id)

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-white mb-8">Study Materials</h1>

        {/* Subject Tabs */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {materials.subjects.map((subject) => (
            <button
              key={subject.id}
              onClick={() => setActiveSubject(subject.id)}
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

        {/* Content Area */}
        <div className="space-y-8">
          {materials.subjects
            .find((s) => s.id === activeSubject)
            ?.topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h2 className="text-lg font-medium text-white mb-4">{topic.name}</h2>
                <div className="grid gap-4">
                  {topic.resources.map((resource) => (
                    <div
                      key={resource.id}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        {/* Icon based on resource type */}
                        {resource.type === 'pdf' ? (
                          <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        ) : (
                          <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        <div>
                          <h3 className="text-white font-medium">{resource.name}</h3>
                          <p className="text-sm text-gray-400">
                            {resource.type === 'pdf' ? resource.size : resource.duration}
                          </p>
                        </div>
                      </div>
                      <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm">
                        {resource.type === 'pdf' ? 'Download' : 'Watch'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
} 